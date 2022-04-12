import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBarIG avatar="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/three-toed-sloth-teaser-1.jpg.optimal.jpg" />
			<Post
				postImage="https://static01.nyt.com/images/2014/01/28/science/28SLOT_SPAN/28SLOT-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
				user="jaythesloth"
				likes="8"
				avatar="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/three-toed-sloth-teaser-1.jpg.optimal.jpg"
				post="Aquí de chill a tope."
			/>
			<Post
				postImage="https://www.theslothinstitute.org/wp-content/uploads/2021/09/3Fingered-sloth-release.jpg"
				user="jaythesloth"
				likes="14"
				avatar="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/three-toed-sloth-teaser-1.jpg.optimal.jpg"
				post="Experiencia brutal de acampada. 100% recomendado."
			/>
			<Post
				postImage="https://news.uchicago.edu/sites/default/files/images/2019-06/sloth_family_tree.jpg"
				user="jaythesloth"
				likes="21"
				avatar="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/three-toed-sloth-teaser-1.jpg.optimal.jpg"
				post="En este sitio se cena de lujo, volveré."
			/>
		</div>
	);
};
function NavBarIG({ likes, user, post, avatar, postImage }) {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid row d-flex">
				<div className="col-4">
					<a class="navbar-brand" href="#">
						<i class="fab fa-instagram"></i>
						<span class="IGLogo"> Instagram</span>
					</a>
				</div>
				<div className="col-4">
					<input
						class="form-control"
						type="text"
						placeholder="Search"
						aria-label="default input example"
					/>
				</div>
				<div className="col-4">
					<i class="fas fa-home align-middle right-icons"></i>
					<i class="far fa-paper-plane align-middle right-icons"></i>
					<i class="far fa-plus-square align-middle right-icons"></i>
					<i class="far fa-compass align-middle right-icons"></i>
					<i class="far fa-heart align-middle right-icons left-icons"></i>
					<img src={avatar} class="avatar align-middle " alt="" />
				</div>
			</div>
		</nav>
	);
}
function Post({ likes, user, post, avatar, postImage }) {
	return (
		<div>
			<div className="container-fluid" id="post">
				<div className="top-post row d-flex justify-content-between py-2">
					<div className="col-6 align-middle">
						<span class="px-1">
							<img src={avatar} class="avatar" alt="" />
						</span>
						<strong> {user}</strong>
					</div>
					<div className="col-1 align-middle">
						<i class="fas fa-ellipsis-v"></i>
					</div>
				</div>
				<div className="post-image row">
					<img src={postImage} alt="" />
				</div>
				<div className="row icons d-flex justify-content-between py-2">
					<div className="col">
						<i class="far fa-heart left-icons"></i>
						<i class="far fa-comment left-icons"></i>
						<i class="far fa-paper-plane left-icons"></i>
					</div>
					<div className="col-1">
						<i class="far fa-bookmark"></i>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<p>
							Liked by <strong>untaljavi</strong> and{" "}
							<strong>{likes} others</strong>
						</p>
					</div>
				</div>
				<div className="row">
					<div class="col">
						<p>
							<strong>jaythesloth</strong> {post}
						</p>
					</div>
				</div>
				<hr></hr>
				<div className="row justify-content-between">
					<div className="col-6">
						<i class="far fa-smile align-middle"></i>
						<input
							class="comment align-middle"
							type="text"
							placeholder="Add a comment..."
						/>
					</div>
					<div className="col-1 text-end">
						<p>Post</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Home;
