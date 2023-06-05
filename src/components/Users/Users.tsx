import s from "./Users.module.css";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import ReactPaginate from 'react-paginate';
import {UserType} from "../../types/types";


type PropsType = {
    users: Array<UserType>
    setFollow: (userId: number) => void
    setUnfollow: (userId: number) => void
}

const Users: React.FC<PropsType> = (props) => {


    const [currentPage, setCurrentPage] = useState(0);


    // Function to handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber.selected);
    };

    let data: Array<UserType> = props.users;
    let itemsPerPage: number = 10

    const pagesToShow: number = 5; // Number of pages to show before and after the current page
    const startPage: number = Math.max(1, currentPage - pagesToShow);
    const endPage: number = Math.min(10, currentPage + pagesToShow);
    const pageNumbers: Array<number> = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }



    let totalPages: number = Math.ceil(data.length / itemsPerPage);
    const offset: number = currentPage * itemsPerPage;
    const currentPageData: Array<UserType> = data.slice(offset, offset + itemsPerPage);



    return <div>
        <div >
            <ReactPaginate
                previousLabel={'Previous'}
                previousClassName={s.pagination.next}
                nextLabel={'Next'}
                nextClassName={s.pagination.next}
                pageCount={totalPages}
                marginPagesDisplayed={5}
                pageRangeDisplayed={5}
                containerClassName={s.pagination}
                activeLinkClassName={s.pagination.a}
                breakClassName={s.pagination.break}
                onPageChange={handlePageChange}
                makerClassName={s.pagination.maker}

            />
        </div>

        {currentPageData.map(u => <div key={u.id}>
            <div>
                <NavLink to={"/profile"}>
                    <img className={s.profile_photo}
                         src="https://www.shutterstock.com/image-vector/donkey-shrek-icon-funny-cartoon-600w-2156476755.jpg"
                         alt="logo">
                    </img>
                </NavLink>
            </div>
            <div>
                {u.followed ?
                    <button onClick={() => {
                        props.setUnfollow(u.id)
                    }}>Unfollow</button> :

                    <button onClick={() => {
                        props.setFollow(u.id)
                    }}> Follow </button>}
            </div>
            <span>
                <div>{u.name}</div>
                 <div>{u.status}</div>
            </span>
        </div>)}
    </div>


}


export default Users;