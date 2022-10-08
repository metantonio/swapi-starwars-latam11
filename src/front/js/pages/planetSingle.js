import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Planetsingle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		console.log("Se abre el componente Planetsingle")
		console.log(params.uid)
		actions.getSinglePlanet(params.uid)

		return () => {
			console.log("Se cerró el componente PlanetSingle")
		}
	}, [])
	return (
		<div className="jumbotron">
			<h1 className="display-4">El nombre del Planeta es: {store.planet.properties ? store.planet.properties.name : "no ha cargado"} </h1>
			<img src={rigoImageUrl} />
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

