import React, { useContext } from "react";
import { logOuthandler } from "../../helpers/function";
import useViewUsers from "../../hooks/core/useViewUsers";
import "./style.scss";
import logout from "../../assets/images/logOut.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { ModalContext } from "../../context/ModalContextProvider";
import { useLocation } from "react-router-dom";

const Header = () => {
	const { setModalState } = useContext(ModalContext);
	const { data } = useViewUsers();
	const location = useLocation();
	//Create modal handler
	const openCreateModalHandler = () => {
		setModalState((prev) => ({
			...prev,
			create: true,
		}));
	};

	return (
		<>
			{location.pathname === "/users" && (
				<div className='buttonWrapper'>
					<button onClick={() => openCreateModalHandler()} className='Button_Primary'>
						<FontAwesomeIcon icon={solid("add")} color='#fff' />
						Create
					</button>
				</div>
			)}
			<div className='header_title'>
				<div className='logoWrapper'>
					<img src={logout} alt='logout' onClick={() => logOuthandler()} />
				</div>
				<div className='avatar-name d-flex  flex-column '>
					<span>{data ? data.data.first_name.en : ""}</span>
					<span>{data ? data.data.last_name.en : ""}</span>
				</div>
				<div className='avatar'>
					{data ? <img src={data.data.resource.url} alt='avatar' /> : ""}
				</div>
			</div>
		</>
	);
};

export default Header;
