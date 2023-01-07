import React, { useContext, useState } from "react";
import "./style.scss";
import userImage from "../../assets/images/user.png";
import { formatPhoneNumber } from "../../helpers/function";
import EditModal from "../Modals/EditModal";
import DeleteModal from "../Modals/DeleteModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { ModalContext } from "../../context/ModalContextProvider";

const Table = ({ content }) => {
	const { setModalState, modalState } = useContext(ModalContext);
	const [user, setUser] = useState();

	// edit modal handler
	const openEditModalHandler = (user) => {
		// console.log(user);
		setUser(user);
		setModalState((prev) => ({
			...prev,
			edit: true,
		}));
	};

	// delete modal handler
	const openDeleteModalHandler = (user) => {
		console.log(user.username);
		setUser(user);
		setModalState((prev) => ({
			...prev,
			delete: true,
		}));
	};
	return (
		<div className='d-flex justify-content-center w-100 align-items-center h-100 '>
			{content ? (
				<table className='p-4' cellPadding='0' cellSpacing='0'>
					<thead>
						<tr className='text-uppercase'>
							<th>user</th>
							<th>Email</th>
							<th></th>
						</tr>
					</thead>

					<tbody>
						{content.data.map((user, index) => {
							return (
								<tr key={index}>
									<td className=''>
										<div className='d-flex align-items-center gap-2'>
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
										</div>
									</td>
									<td>
										<div className='d-flex flex-column'>
											<span className='email'>{user.profile.email}</span>
										</div>
									</td>
									<td>
										<div className='d-flex'>
											<button
												onClick={() => openEditModalHandler(user)}
												className='tableButton'
											>
												<FontAwesomeIcon
													icon={solid("edit")}
													color='#fff'
												/>
											</button>
											<button
												onClick={() => openDeleteModalHandler(user)}
												className='tableButton'
											>
												<FontAwesomeIcon
													icon={solid("trash")}
													color='#fff'
												/>
											</button>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			) : (
				<h2>loading</h2>
			)}

			<EditModal userId={user && user.id} />
			<DeleteModal userId={user && user.id} userName={user && user.username} />
		</div>
	);
};

export default Table;
