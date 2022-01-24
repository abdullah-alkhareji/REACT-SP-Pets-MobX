import store from "../petStore";

export default function PetItem({ pet }) {
	return (
		<div className='col-lg-4 col-md-8 col-sm-10'>
			<div className='single-doctor'>
				<img className='image' alt={pet.name} src={pet.image} />
				<div className='content'>
					<h3>{pet.name}</h3>
					<button
						type='button'
						className='btn btn-info'
						onClick={() => store.handleAdopt(pet.id)}>
						Adopt
					</button>
				</div>
			</div>
		</div>
	);
}
