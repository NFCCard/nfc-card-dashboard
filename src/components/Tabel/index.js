import React from "react";
import "./style.scss";
import userImage from "../../assets/images/user.png";
import edit from "../../assets/images/edit.png";
import trash from "../../assets/images/delete.png";
import { SpringButtom } from "../../components";
import { formatPhoneNumber } from "../../helpers/function";

const Table = ({ content }) => {
	return (
		<div className='d-flex justify-content-center w-100 align-items-center h-100 '>
			{content ? (
				<table className='p-4' cellPadding='0' cellSpacing='0'>
					<thead>
						<tr className='text-uppercase'>
							<th>user</th>
							<th>contact</th>
							<th></th>
						</tr>
					</thead>

					<tbody>
						{content.data.map((user, index) => {
							return (
								<tr key={index}>
									<td className='d-flex align-items-center gap-2'>
										<img
											className='avatar'
											src={
												user.profile.resource
													? user.profile.resource.url
													: userImage
											}
											alt={user.username}
										/>
										<div className='d-flex  flex-column '>
											<div className='d-flex gap-2'>
												<span>{user.profile.last_name.fa}</span>
												<span>{user.profile.first_name.fa}</span>
											</div>
											<div>
												<span className='phone-number'>
													{formatPhoneNumber(user.profile.phone)}
												</span>
											</div>
										</div>
									</td>
									<td>
										<div className='d-flex flex-column'>
											<span className='email'>{user.profile.email}</span>
										</div>
									</td>
									<td>
										<button className='tableButton'>
											<img src={edit} alt='edit' />
										</button>
										<button className='tableButton'>
											<img src={trash} alt='delete' />
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			) : (
				<h2>loading</h2>
			)}
			{/* <SpringButtom /> */}
		</div>
	);
};

export default Table;
