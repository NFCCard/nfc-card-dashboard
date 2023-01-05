import React from "react";
import { logOuthandler } from "../../helpers/function";
import useViewUsers from "../../hooks/core/useViewUsers";
import "./style.scss";
import logout from "../../assets/images/logOut.png";

const Header = () => {
	const { data } = useViewUsers();

	return (
		<div>
			<div className='header_title'>
				<div className='tooltip'>خروج</div>
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
		</div>
	);
};

export default Header;
