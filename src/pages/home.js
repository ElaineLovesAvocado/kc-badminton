import React, { Component} from "react";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import JackAvatar from '../images/Jack.gif'
import LinyiAvatar from '../images/Linyi.gif'
import { TypeAnimation } from 'react-type-animation';
import './home.css'

const Home = () => {
	
		return (		
			<div className="body">
				
				<div className="intro">
					<h1>Admin & Rules </h1>
				</div>

				<div className="welcomeMsg">
					<TypeAnimation
						sequence={[
							'Welcome to KC 🏸 Saturday Night League!',
							() => {
							console.log('Sequence completed');
							},
						]}
						wrapper="span"
						cursor={true}
						repeat={0}
						style={{ display: 'inline-block' }}
					/>
				</div>

			
				<div className="players" >
					{/* <div className="avatar1">
						<Stack direction="Column" spacing={8}>
							<div id="Sin">
								<Avatar alt="Linyi" src={LinyiAvatar} sx={{ width: 80, height: 80 }}  /> Angie
							</div>
							<div id="Angie">
								<Avatar alt="Jack" src={JackAvatar} sx={{ width: 80, height: 80 }} /> Sin
							</div>				
						</Stack>
						
					</div> */}

				</div>
		
			</div>
		);
	};

export default Home

