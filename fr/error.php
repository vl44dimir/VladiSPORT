<div class="container">
	<div class="forbidden-sign"></div>
	<h1>Erreur 403.</h1>
	<p>Assurez-vous que vous disposez des autorisations suffisantes pour y accéder ou <a href='../fr'>se reconnecter</a>.</p>
</div>

<style>
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
/* sorry for the scrambled mess */
 body {
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 height: 100vh;
	 width: 100vw;
	 background: #e8e8e8;
	 font-family: Montserrat, sans-serif;
}
 .container {
	 background: white;
	 height: auto;
	 width: 70vw;
	 padding: 1.5rem;
	 box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
	 border-radius: 4px;
	 text-align: center;
}
 .container h1 {
	 font-size: 2.25rem;
	 margin: 0;
	 margin-top: 1rem;
	 color: #263238;
	 opacity: 0;
	 transform: translateX(-0.1rem);
	 animation: fadeIn 1s forwards 1.5s;
}
 .container p {
	 margin: 0;
	 margin-top: 0.5rem;
	 color: #546e7a;
	 opacity: 0;
   font-size: 1.5rem;
	 transform: translateX(-0.1rem);
	 animation: fadeIn 1s forwards 1.75s;
}
 @media screen and (max-width: 768px) {
	 .container {
		 width: 50vw;
	}
}
 @media screen and (max-width: 600px) {
	 .container {
		 width: 60vw;
	}
}
 @media screen and (max-width: 500px) {
	 .container {
		 width: 80vw;
	}
}
 @keyframes fadeIn {
	 from {
		 transform: translateY(1rem);
		 opacity: 0;
	}
	 to {
		 transform: translateY(0rem);
		 opacity: 1;
	}
}
 .forbidden-sign {
	 margin: auto;
	 width: 4.6666666667rem;
	 height: 4.6666666667rem;
	 border-radius: 50%;
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 background-color: #e3474b;
	 animation: grow 1s forwards;
}
 @keyframes grow {
	 from {
		 transform: scale(1);
	}
	 to {
		 transform: scale(1);
	}
}
 .forbidden-sign::before {
	 position: absolute;
	 background-color: white;
	 border-radius: 50%;
	 content: "";
	 width: 4rem;
	 height: 4rem;
	 transform: scale(0);
	 animation: grow2 0.5s forwards 0.5s;
}
 @keyframes grow2 {
	 from {
		 transform: scale(0);
	}
	 to {
		 transform: scale(1);
	}
}
/* slash */
 .forbidden-sign::after {
	 content: "";
	 z-index: 2;
	 position: absolute;
	 width: 4rem;
	 height: 0.3333333333rem;
	 transform: scaley(0) rotateZ(0deg);
	 background: #e3474b;
	 animation: grow3 0.5s forwards 1s;
}
 @keyframes grow3 {
	 from {
		 transform: scaley(0) rotateZ(0deg);
	}
	 to {
		 transform: scaley(1) rotateZ(-45deg);
	}
}
a {
 color: #e3474b;
}
</style>