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
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    let data = props.users;
    let itemsPerPage = 10


    let totalPages = Math.ceil(data.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentPageData = data.slice(offset, offset + itemsPerPage);



    return <div>
        <div >
            <ReactPaginate
                previousLabel={'Previous'}
                previousClassName={s.pagination.next}
                nextLabel={'Next'}
                nextClassName={s.pagination.next}
                pageCount={totalPages}
                marginPagesDisplayed={200}
                pageRangeDisplayed={5}
                containerClassName={s.pagination}
                activeLinkClassName={s.pagination.active}
                breakClassName={s.pagination.break}
                onPageChange={handlePageChange}
                onPageChange={({ selected }) => setCurrentPage(selected)}
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