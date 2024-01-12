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
					<h1> Regulation & Score Rules </h1>
				</div>

				<div className="welcomeMsg">
					{/* <TypeAnimation
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
					/> */}
				</div>

			
				<div className="rules" >
					
					<div>
						(Win+20)(Lose-10)⇦   MD  🆚  MD  ⇨(Win+20)(Lose-10)
					</div>
					
					<div>
						(Win+25)(Lose-5)⇦  XD  🆚  MD  ⇨(Win+15)(Lose-15)
					</div>

					<div>
						(Win+20)(Lose-10)⇦   XD  🆚  XD  ⇨(Win+20)(Lose-10)
					</div>

					<div>
						(Win+25)(Lose-5)⇦   WD  🆚  XD   ⇨(Win+15)(Lose-15)
					</div>

					<div>
						(Win+20)(Lose-10)⇦   WD  🆚  WD   ⇨(Win+20)(Lose-10)
					</div>

				</div>
		
			</div>
		);
	};

export default Home

