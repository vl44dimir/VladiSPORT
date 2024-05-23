jQuery(document).ready(function() {

	var survey = {
		1:{
			'question': 'Fixe ton objectif',
			'info': '1',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 2,
					'item': 'Prise musculaire',
					'image': '/images/quiz/priseDeMuscle.png',
					'css': 'first'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 2,
					'item': 'Perte de poids',
					'image': '/images/quiz/perteDePoid.png',
					'css': 'first'
				}
			}
		},
		2:{
			'question': 'Quel est ton objectif?',
			'info': '2',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 3,
					'item': 'Devenir sexuellement attirant'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 3,
					'item': 'Savoir se défendre'
				},
				3:{
					'type': 'radio',
					'dynamic': true,
					'route': 3,
					'item': 'Paraître cool'
				},
				4:{
					'type': 'radio',
					'dynamic': true,
					'route': 3,
					'item': 'Booster ton amour-propre'
				},
				5:{
					'type': 'radio',
					'dynamic': true,
					'route': 3,
					'item': 'Avoir un corps en bonne santé'
				},
				6:{
					'type': 'radio',
					'dynamic': true,
					'route': 3,
					'item': 'Améliorer tes performances sportives'
				},
				7:{
					'type': 'radio',
					'dynamic': true,
					'route': 3,
					'item': 'Autre'
				}
			}
		},
		3:{
			'question': `Qu'est-ce qui vous motive à faire du sport?`,
			'info': '3',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 4,
					'item': 'Améliorer la santé'
						},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 4,
					'item': 'Mes ami(e)s'
				},
				3:{
					'type': 'radio',
					'dynamic': true,
					'route': 4,
					'item': 'Booster mon système immunitaire'
				},
				4:{
					'type': 'radio',
					'dynamic': true,
					'route': 4,
					'item': 'Avoir une meilleure silhouette'
				},
				5:{
					'type': 'radio',
					'dynamic': true,
					'route': 4,
					'item': 'Gagner en force et en endurance'
				},
				6:{
					'type': 'radio',
					'dynamic': true,
					'route': 4,
					'item': 'Booster la libido'
				}
			}
		},
		4:{
			'question': 'Choissisez votre type corporel?',
			'info': '4',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 5,
					'item': 'Mince',
					'image': '/images/quiz/mince.png'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 5,
					'item': 'Normal',
					'image': '/images/quiz/normal.png'
				},
				3:{
					'type': 'radio',
					'dynamic': true,
					'route': 5,
					'item': 'Rond',
					'image': '/images/quiz/rond.png'
				}
			}
		},
		5:{
			'question': 'Aimez-vous vôtre corps?',
			'info': '5',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 6,
					'item': `Oui, je l'adore`
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 6,
					'item': 'Il doit être amélioré'
				},
				3:{
					'type': 'radio',
					'dynamic': true,
					'route': 6,
					'item': 'I hate looking at the mirror'
				},
				4:{
					'type': 'radio',
					'dynamic': true,
					'route': 6,
					'item': 'Autre'
				}
			}
		},
		6:{
			'question': `Qu'est ce que vous appréciez le plus après avoir atteint votre objectif de sport`,
			'info': '6',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 7,
					'item': 'Apprécier mon reflet dans le miroir'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 7,
					'item': 'Profiter de mes nouvelles habitudes de vie'
				},
				3:{
					'type': 'radio',
					'dynamic': true,
					'route': 7,
					'item': 'Être fier de moi'
				},
				4:{
					'type': 'radio',
					'dynamic': true,
					'route': 7,
					'item': 'Avoir de meilleurs indicateurs de santé'
				},
				5:{
					'type': 'radio',
					'dynamic': true,
					'route': 7,
					'item': `Avoir plus d'énergie`
				},
				6:{
					'type': 'radio',
					'dynamic': true,
					'route': 7,
					'item': `Être fier de mon corps sculpté`
				}
			}
		},
		7:{
			'question': 'Quel corps voulez-vous obtenir?',
			'info': '7',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 8,
					'item': 'Svelte',
					'image': '/images/quiz/svelte.png'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 8,
					'item': 'Musclé',
					'image': '/images/quiz/musclé.png'
				},
				3:{
					'type': 'radio',
					'dynamic': true,
					'route': 8,
					'item': 'Très musclé',
					'image': '/images/quiz/trèsMusclé.png'
				}
			}
		},
		8:{
			'question': 'Quelle zone préférez vous travaillez?',
			'info': '8',
			'answer':{
				1:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 9,
					'item': 'Bras'
				},
				2:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 9,
					'item': 'Pecs'
				},
				3:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 9,
					'item': 'Ventre'
				},
				4:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 9,
					'item': 'Jambes'
				}
			}
		},
		9:{
			'question': 'Quand avec vous été satisfait de votre image corporelle pour la dernière fois?',
			'info': '9',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 10,
					'item': `Il y a moins d'un an`
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 10,
					'item': 'Il y a 1 à 2 ans'
				},
				3:{
					'type': 'radio',
					'dynamic': true,
					'route': 10,
					'item': 'Il y a plus de 3 ans'
				},
				4:{
					'type': 'radio',
					'dynamic': true,
					'route': 10,
					'item': 'Je suis actuellement satisfait'
				},
				4:{
					'type': 'radio',
					'dynamic': true,
					'route': 10,
					'item': 'Jamais'
				},
			}
		},
		10:{
			'question': 'Choisissez vos priorités principales',
			'info': '10',
			'answer':{
				1:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 11,
					'item': 'Pertes de poids',
					'identity': 'small'
				},
				2:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 11,
					'item': 'Agilité'
				},
				3:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 11,
					'item': 'Force'
				},
				4:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 11,
					'item': 'Prise de muscle'
				},
				5:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 11,
					'item': 'Santé cardiaque'
				},
				6:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 11,
					'item': 'Sculptage du corps'
				},
				3:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 11,
					'item': 'Forme générale'
				},
				4:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 11,
					'item': 'Brûlage des graisses'
				},
				5:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 11,
					'item': 'Endurance'
				},
				6:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 11,
					'item': 'Récupération'
				},
				7:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 11,
					'item': 'Régularité'
				},
				8:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 11,
					'item': 'Boost de libido'
				},
				9:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 11,
					'item': 'Mobilité'
				},
				10:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 11,
					'item': 'Souplesse'
				},
				11:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 11,
					'item': 'Physique amélioré'
				},
				12:{
					'type': 'checkbox',
					'dynamic': true,
					'route': 11,
					'item': 'Gagner en énergie'
				},
			}
		},
		11:{
			'question': 'Niveau de sport',
			'info': '11',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 12,
					'item': 'Débutant <span>Je débute dans le sport</span>'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 12,
					'item': `Intermédiaire <span>Je m'entraine 2-3 fois par semaine</span>`
				},
				3:{
					'type': 'radio',
					'dynamic': true,
					'route': 12,
					'item': `Avancé <span>Je m'entraine régulièrement</span>`
				}
			}
		},
		12:{
			'question': 'Combien de pompes êtes vous capable de faire?',
			'info': '12',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 13,
					'item': 'Moins de 12'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 13,
					'item': 'Entre 13 et 20'
				},
				3:{
					'type': 'radio',
					'dynamic': true,
					'route': 13,
					'item': 'Plus de 21'
				},
				4:{
					'type': 'radio',
					'dynamic': true,
					'route': 13,
					'item': 'Je ne sais pas'
				}
			}
		},
		13:{
			'question': 'Avez-vous un style de vie sédentaire?',
			'info': '13',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 14,
					'item': 'Oui'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 14,
					'item': 'Non'
				}
			}
		},
		14:{
			'question': 'Combien de temps marchez-vous tous les jours?',
			'info': '14',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 15,
					'item': `Moins d'1 heure`
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 15,
					'item': '1 a 2 heures'
				},
				3:{
					'type': 'radio',
					'dynamic': true,
					'route': 15,
					'item': 'Plus de 2 heures'
				}
			}
		},
		15:{
			'question': 'Comment vous sentez-vous entre les repas?',
			'info': '15',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 16,
					'item': `J'ai sommeil quand j'ai faim`
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 16,
					'item': `Je suis fatigué(e) après avoir mangé`
				},
				3:{
					'type': 'radio',
					'dynamic': true,
					'route': 16,
					'item': `J'ai suffisament d'énergie au cours de la journée`
				},
				4:{
					'type': 'radio',
					'dynamic': true,
					'route': 16,
					'item': `Je me sens fatigué lorsque je mange trop`
				},
				5:{
					'type': 'date',
					'dynamic': true,
					'route': 16,
					'item': `Je me sens irritable lorsque j'ai faim`
				},
			}
		},
		16:{
			'question': 'Combien de temps dormez-vous',
			'info': '16',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 17,
					'item': 'Moins de 5 heures'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 17,
					'item': 'Entre 5 et 6 heures'
				},
				3:{
					'type': 'radio',
					'dynamic': true,
					'route': 17,
					'item': 'Entre 7 et 8 heures'
				},
				4:{
					'type': 'radio',
					'dynamic': true,
					'route': 17,
					'item': 'Plus de 8 heures'
				},
			}
		},
		17:{
			'question': 'Qu\'elle quantité d\'eau buvez vous?',
			'info': '17',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 18,
					'item': 'Je ne bois que du thé et du café'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 18,
					'item': 'Moins de 2 verres d\'eau'
				},
				3:{
					'type': 'radio',
					'dynamic': true,
					'route': 18,
					'item': '2 à 6 verres d\'eau'
				},
				4:{
					'type': 'radio',
					'dynamic': true,
					'route': 18,
					'item': '7 à 10 verres d\'eau'
				},
				5:{
					'type': 'radio',
					'dynamic': true,
					'route': 18,
					'item': 'Plus de 10 verres d\'eau'
				},
			}
		},
		18:{
			'question': 'Qu\'elle votre taille?',
			'info': '18',
			'answer':{
				1:{
					'type': 'number',
					'dynamic': true,
					'route': 19,
					'placeholder': '183cm',
					'identity': 'size'
				},
			}
		},
		19:{
			'question': 'Qu\'elle votre poids',
			'info': '19',
			'answer':{
				1:{
					'type': 'number',
					'dynamic': true,
					'route': 20,
					'placeholder': '78kg',
					'identity': 'weight'
				},
			}
		},
		20:{
			'question': 'Qu\'elle poids souhaitez-vous atteindre?',
			'info': '20',
			'answer':{
				1:{
					'type': 'number',
					'dynamic': true,
					'route': 21,
					'placeholder': '85kg',
					'identity': 'weightFav'
				},
			}
		},
		21:{
			'question': 'Qu\'elle âge avez-vous?',
			'info': '21',
			'answer':{
				1:{
					'type': 'number',
					'dynamic': true,
					'route': 22,
					'placeholder': '19 ans',
					'identity': 'years'
				},
			}
		},
		22:{
			'question': 'Choisissez votre lieu d\'entraînement',
			'info': '22',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 23,
					'item': 'Domicile'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 23,
					'item': 'Salle'
				},
			}
		},
		23:{
			'question': 'Informations supplémentaire',
			'info': '23',
			'answer':{
				1:{
					'type': 'form',
					'dynamic': true,
					'route': 18,
					'placeholder': 'first name here',
					'identity': 'mm-dynamic-fn',
					'title': 'First Name'
				},
				2:{
					'type': 'form',
					'dynamic': true,
					'route': 18,
					'placeholder': 'Last name here',
					'identity': 'mm-dynamic-ln',
					'title': 'Last Name'
				},
				3:{
					'type': 'form',
					'dynamic': true,
					'route': 18,
					'placeholder': 'Banana@example.com',
					'identity': 'mm-dynamic-em',
					'title': 'Email'
				}
			}
		}
		// 18:{
		// 	'question': 'Great job! Thanks for submitting a quote to WebDevlopr, you should be receiving an email soon.',
		// 	'answer': {}
		// }
	};

	for (var i = 1; i <= Object.keys(survey).length; i++) {

		var data, container, content;
		data = survey[i];
		container = jQuery('.mm-survey-container');
		content = 	'<div class="mm-survey-page mm-survey-page-'+i+'" data-page="'+i+'">'+
						'<div class="info"><div class="prevBtn"><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 9l-6 6 6 6"/><path d="M20 4v7a4 4 0 0 1-4 4H5"/></svg></button></div><div><b>étape '+data.info+'</b> sur 24</div></div>'+
						'<div class="mm-survery-content">'+
							'<div class="mm-survey-question"><h2>'+data.question+'</h2></div>'+
						'</div>'+
					'</div>';
		container.append(content);
		
		if(Object.keys(data.answer).length < 1) {
			jQuery('.mm-survey-page-'+i+' .mm-survery-content').append('<p>End of the line</p>');
		}
		else {
			for (var ii = 1; ii <= Object.keys(data.answer).length; ii++) {

				var datax, containerx, contentx;
				datax = data.answer[ii];
				containerx = jQuery('.mm-survey-page-'+i+' .mm-survery-content');

				switch(datax.type) {
				    case 'radio':
						if(datax.image){
							contentx = 	'<div class="mm-survey-item mm-dynamic">'+
							'<input type="radio" class="'+datax.identity+'"id="radio'+i+'0'+ii+'" data-group="'+i+'" data-dynamic="'+datax.route+'" data-item="'+ii+'" name="radio'+i+'" value="'+datax.item+'" />'+
							'<label for="radio'+i+'0'+ii+'"><p>'+datax.item+'</p></label>'+
							'<img class="'+datax.css+'" src="'+datax.image+'">'+
						'</div>';
						}else{
							contentx = 	'<div class="mm-survey-item mm-dynamic padding">'+
							'<input type="radio" class="'+datax.identity+'"id="radio'+i+'0'+ii+'" data-group="'+i+'" data-dynamic="'+datax.route+'" data-item="'+ii+'" name="radio'+i+'" value="'+datax.item+'" />'+
							'<label for="radio'+i+'0'+ii+'"><p>'+datax.item+'</p></label>'+
						'</div>';
						}
				        
				        break;
					case 'checkbox':
				        contentx = 	'<div class="mm-survey-item mm-dynamic padding">'+
										'<input type="checkbox" class="'+datax.identity+'"id="checkbox'+i+'0'+ii+'" data-group="'+i+'" data-dynamic="'+datax.route+'" data-item="'+ii+'" name="checkbox'+i+'" value="'+datax.item+'" />'+
										'<label for="checkbox'+i+'0'+ii+'"><p>'+datax.item+'</p></label>'+
									'</div>';
				        break;
				    case 'text':
				        contentx = 	'<div class="mm-survey-item mm-dynamic-input">'+
										'<input type="text" class="'+datax.identity+'" data-group="'+i+'" data-dynamic="'+datax.route+'" placeholder="'+datax.placeholder+'" />'+
									'</div>';
				        break;
				    case 'date':
				        contentx = 	'<div class="mm-survey-item mm-dynamic-datetime">'+
										'<input type="text" class="'+datax.identity+'" id="datetimepicker-'+i+'" data-datetimeid="'+i+'" data-group="'+i+'" data-dynamic="'+datax.route+'" data-format="mm/dd/yyyy hh:mm" />'+
									'</div>';
				        break;
					case 'number':
						contentx = 	'<div class="mm-survey-item mm-dynamic-input">'+
										'<input type="number" class="'+datax.identity+'" data-group="'+i+'" data-dynamic="'+datax.route+'" placeholder="'+datax.placeholder+'" pattern="[0-9]*" inputmode="numeric" />'+
									'</div>';
						break;
				    case 'form':
				    	contentx = 	'<div class="mm-dynamic-form-item">'+
					    				'<p>'+datax.title+'</p>'+
					    				'<div class="mm-survey-item mm-dynamic-form">'+
											'<input type="text" class="'+datax.identity+'" data-group="'+i+'" data-dynamic="'+datax.route+'" placeholder="'+datax.placeholder+'" />'+
										'</div>'+
									'</div>';
				        break;
				}

				containerx.append(contentx);

			}
		}
	}

	jQuery('.mm-survey-page:first').addClass('active mm-dynamic-active');
	jQuery('.prevBtn').hide();

	var x;
	var xyz;
	var xtx;
	var count;
	var current;
	var percent;
	var z = [];

	init();
	goToNext();
	goToPrev();
	getCount();
	buildStatus();
	deliverStatus();
	submitData();
	goBack();

	function init() {
		
		jQuery('.mm-survey-container .mm-survey-page').each(function() {

			var item;
			var page;

			item = jQuery(this);
			page = item.data('page');

			item.addClass('mm-page-'+page);

		});

	}

	function getCount() {

        count = jQuery('.mm-survey-page').length;
        return count;

    }

    function dynamicForm() {
    	jQuery('.mm-dynamic-form-item').wrapAll('<div class="mm-dynamic-form-wrap">');
    	jQuery('.mm-survey-item input').on('keyup', function() {
    		var item, id, form;
    		item = jQuery(this);
    		id = item.closest('.mm-survey-page').data('page');
    		form = item.closest('.mm-dynamic-form-wrap');
    		form.addClass('mm-dynamic-form-'+id);
    	});
    }

    dynamicForm();

    function checkDate() {
    	jQuery('.mm-dynamic-date').on('dp.change', function() {
			var item, id;
			item = jQuery(this);
			id = item.data('datetimeid');
			// jQuery('.mm-survey-page').removeClass('active');
			xyz = item.data('dynamic');
			jQuery('.mm-page-'+id).addClass('pass');
			item.parent().addClass('bingo');
			// jQuery('.mm-page-'+xyz).addClass('active mm-dynamic-active');
			buttonConfig(id);
		});
    }

    function checkSize(e,f) {
    	jQuery('.size').on('keyup', function() {

    		var size, sizeVal;

    		size = jQuery(this);
            sizeVal = size.val();

    		if ( sizeVal >= 4) {
    			size.parent().addClass('bingo');
    			jQuery('.mm-page-'+f).addClass('pass');
    			buttonConfig(f);
    		}
    		else {
    			size.parent().removeClass('bingo');
    			jQuery('.mm-page-'+f).removeClass('pass');
    			buttonConfig(f);
    		}

    	});
    }
	
	function checkWeight(e,f) {
    	jQuery('.weight').on('keyup', function() {

    		var weight, weightVal;

    		weight = jQuery(this);
            weightVal = weight.val();

    		if ( weightVal >= 4) {
    			weight.parent().addClass('bingo');
    			jQuery('.mm-page-'+f).addClass('pass');
    			buttonConfig(f);
    		}
    		else {
    			weight.parent().removeClass('bingo');
    			jQuery('.mm-page-'+f).removeClass('pass');
    			buttonConfig(f);
    		}

    	});
    }

	function checkWeightFav(e,f) {
    	jQuery('.weightFav').on('keyup', function() {

    		var weightFav, weightFavVal;

    		weightFav = jQuery(this);
            weightFavVal = weightFav.val();

    		if ( weightFavVal >= 4) {
    			weightFav.parent().addClass('bingo');
    			jQuery('.mm-page-'+f).addClass('pass');
    			buttonConfig(f);
    		}
    		else {
    			weightFav.parent().removeClass('bingo');
    			jQuery('.mm-page-'+f).removeClass('pass');
    			buttonConfig(f);
    		}

    	});
    }

	function checkYears(e,f) {
    	jQuery('.years').on('keyup', function() {

    		var years, weightVal;

    		years = jQuery(this);
            yearsVal = years.val();

    		if ( yearsVal >= 4) {
    			years.parent().addClass('bingo');
    			jQuery('.mm-page-'+f).addClass('pass');
    			buttonConfig(f);
    		}
    		else {
    			years.parent().removeClass('bingo');
    			jQuery('.mm-page-'+f).removeClass('pass');
    			buttonConfig(f);
    		}

    	});
    }

    function checkFirstname(e,f){
    	jQuery('.mm-dynamic-fn').on('keyup', function() {
    		var item, v;
    		item = jQuery(this);
    		v = item.val();
    		if(v.length >= 3){
    			item.parent().addClass('bingo');
    			jQuery('.mm-page-'+f).addClass('pass');
    			buttonConfig(f);
    		}
    		else {
    			item.parent().removeClass('bingo');
    			jQuery('.mm-page-'+f).removeClass('pass');
    			buttonConfig(f);
    		}
    	});
    }

    function checkLastname(e,f){
    	jQuery('.mm-dynamic-ln').on('keyup', function() {
    		var item, v;
    		item = jQuery(this);
    		v = item.val();
    		if(v.length >= 3){
    			item.parent().addClass('bingo');
    			jQuery('.mm-page-'+f).addClass('pass');
    			buttonConfig(f);
    		}
    		else {
    			item.parent().removeClass('bingo');
    			jQuery('.mm-page-'+f).removeClass('pass');
    			buttonConfig(f);
    		}
    	});
    }

    function checkEmail(e,f){
    	jQuery('.mm-dynamic-em').on('keyup', function() {
    		var email, emailVal;

    		email = jQuery(this);
            emailVal = jQuery(this).val();
            emailVal = emailVal.toLowerCase();

            if ( ( emailVal.indexOf("@") >= 0 ) && ( emailVal.length > 6 ) && ( emailVal.indexOf(".com") >= 0 || emailVal.indexOf(".org") >= 0 || emailVal.indexOf(".net") >= 0 || emailVal.indexOf(".io") >= 0 || emailVal.indexOf(".me") >= 0 || emailVal.indexOf(".info") >= 0 ) ) {
    			email.parent().addClass('bingo');
    			jQuery('.mm-page-'+f).addClass('pass');
    			buttonConfig(f);
    		}
    		else {
    			email.parent().removeClass('bingo');
    			jQuery('.mm-page-'+f).removeClass('pass');
    			buttonConfig(f);
    		}
    	});
    }

    function runInputs(e,f) {
		checkWeight(e,f);
    	checkSize(e,f);
		checkWeightFav(e,f);
		checkYears(e,f)
    	checkFirstname(e,f);
    	checkLastname(e,f);
    	checkEmail(e,f);
    }

    function goToSkip() {

        jQuery('.mm-survey-item').on('click', function() {

            var item, input, xyz, y, paragraph, title, page;
            
            item = jQuery(this);
            page = item.closest('.mm-survey-page').data('page');
            jQuery('.mm-page-'+page+' .mm-survey-item').removeClass('bingo');

        	getCount();
            y = (count);

            if(item.hasClass('mm-dynamic')) {
            	// jQuery('.mm-survey-page').removeClass('active');
				page = item.closest('.mm-survey-page').data('page');
				jQuery('.mm-survey-page-'+page).addClass('pass');
            	input = item.children('input');
				xyz = input.data('dynamic');
				jQuery('.mm-page-'+xyz).attr('data-orgin',page);
				item.addClass('bingo');
				buildButtons(xyz,y);
				buttonConfig(page);
            }
            else if(item.hasClass('mm-dynamic-input')) {
            	page = item.closest('.mm-survey-page').data('page');
            	jQuery('.mm-page-'+page).removeClass('pass');
            	input = item.children('input');
				xyz = input.data('dynamic');
				jQuery('.mm-page-'+xyz).attr('data-orgin',page);
				runInputs(xyz,page);
            	buildButtons(page,y);
            }
            else if(item.hasClass('mm-dynamic-datetime')) {
            	page = item.closest('.mm-survey-page').data('page');
            	// jQuery('.mm-page-'+page).removeClass('pass');
            	input = item.children('input');
				xyz = input.data('dynamic');
				jQuery('.mm-page-'+xyz).attr('data-orgin',page);
				checkDate();
            	buildButtons(page,y);
            }
            else if(item.hasClass('mm-dynamic-form')) {
            	page = item.closest('.mm-survey-page').data('page');
            	jQuery('.mm-page-'+page).removeClass('pass');
            	input = item.children('input');
				xyz = input.data('dynamic');
				jQuery('.mm-page-'+xyz).attr('data-orgin',page);
				runInputs(xyz,page);
            	buildButtons(page,y);
            }
            else {
            	jQuery('.mm-survey-page').removeClass('active');
            	page = item.closest('.mm-survey-page').data('page');
            	jQuery('.mm-page-'+(page+1)).addClass('active').attr('data-orgin',page);
            	jQuery('.mm-page-'+page+' .mm-survey-item').addClass('bingo');
            	buildButtons((page+1),y);
            	buttonConfig(page+1);
            }


			if(input[0].type === "checkbox") {
				if(input[0].checked){
					item.addClass('check');
				}else {
					item.removeClass('check');
				}
				
			}

            return x;

        });

    }

    goToSkip();

    function goToNext() {

        jQuery('.nextBtn').on('click', function() {
            var g, y, paragraph, title;

            goToSkip();
            getCurrentSlide();
            getCount();

            current = (x + 1);
            g = current/count;
            y = (count + 1);

            if(jQuery('.mm-page-'+x).hasClass('mm-dynamic-active')) {
            	var xyz;
            	xyz = jQuery('.mm-page-'+x+' .bingo input').data('dynamic');
            	buildButtons(xyz, count);
	            buttonConfig(xyz);
	            
	            jQuery('.mm-survey-page').removeClass('active');
	            jQuery('.mm-page-'+xyz).addClass('active mm-dynamic-active');
            }
            else {
            	buildButtons(current, count);
	            buttonConfig(current);
	            
	            jQuery('.mm-survey-page').removeClass('active');
	            jQuery('.mm-page-'+current).addClass('active');
            }

        });

    }

    function goToPrev() {

        jQuery('.prevBtn').on('click', function() {
            var g, y, paragraph, title, orgin;
            
            goToSkip();
            getCurrentSlide();
            getCount();

            current = (x - 1);
            g = current/count;
            y = count;

            if(jQuery('.mm-page-'+x).hasClass('mm-dynamic-active')) {
            	orgin = jQuery('.mm-page-'+x).data('orgin');
            	jQuery('.mm-page-'+x).removeClass('mm-dynamic-active');
            	jQuery('.mm-page-'+x).attr('data-orgin','');
            	jQuery('.mm-page-'+x+' input:radio').removeAttr('checked');
            	jQuery('.mm-survey-page').removeClass('active');
            	jQuery('.mm-page-'+orgin).addClass('active');
            	buildButtons(orgin, count);
            	buttonConfig(orgin);
            }
            else {
            	buildButtons(current, count);
            	buttonConfig(current);
	            jQuery('.mm-survey-page').removeClass('active');
	            jQuery('.mm-page-'+current).addClass('active');

	            paragraph = jQuery('.mm-paragraph-'+current).data('paragraph');
	            jQuery('.mm-paragraph-content p').html(paragraph);
	            title = jQuery('.mm-page-'+current).data('group');
	            jQuery('.mm-project-page-title h3').html(title);

	            jQuery('.mm-slide-page-number').html(current);
            }

        });

    }

    function getCurrentSlide() {

        jQuery('.mm-survey-page').each(function() {

            var item;

            item = jQuery(this);

            if( jQuery(item).hasClass('active') ) {
                x = item.data('page');
                xtx = item.data('page');
            }
            else {
                //
            }

            return x;
            return xtx;

        });

    }

    function buildButtons(a, b) {

        switch(a) {
            case 1:
                jQuery('.nextBtn').show();
                jQuery('.prevBtn').hide();
                jQuery('.finishBtn').hide();
            break;
            case b:
                jQuery('.nextBtn').hide();
                jQuery('.prevBtn').show();
                jQuery('.finishBtn').show();
            break;
            default:
                jQuery('.nextBtn').show();
                jQuery('.prevBtn').show();
                jQuery('.finishBtn').hide();
        }

    }

	function checkStatus() {
		jQuery('.mm-survery-content .mm-survey-item').on('click', function() {
			var item;
			item = jQuery(this);
			item.closest('.mm-survey-page').addClass('pass');
		});
	}

	function buildStatus() {
		jQuery('.mm-survery-content .mm-survey-item').on('click', function() {
			var item;
			item = jQuery(this);
			item.addClass('bingo');
			item.closest('.mm-survey-page').addClass('pass');
			jQuery('.mm-survey-container').addClass('good');
		});
	}

	function deliverStatus() {
		jQuery('.mm-survey-item').on('click', function() {
			if( jQuery('.mm-survey-container').hasClass('good') ){
				jQuery('.mm-survey').addClass('okay');
			}
			else {
				jQuery('.mm-survey').removeClass('okay');	
			}
			buttonConfig();
		});
	}

	function lastPage() {
		if( jQuery('.nextBtn').hasClass('cool') ) {
			alert('cool');
		}
	}

	function buttonConfig(mat) {
		if( jQuery('.mm-survey-page-'+mat).hasClass('pass') ) {
			jQuery('.nextBtn button').addClass('ready').prop('disabled', false);
		}
		else {
			jQuery('.nextBtn button').removeClass('ready').prop('disabled', true);
		}
	}

	function submitData() {
		jQuery('.finishBtn').on('click', function() {
			collectData();
			jQuery('.mm-survey-bottom').slideUp();
			jQuery('.mm-survey-results').slideDown();
		});
	}

	function collectData() {
		
		var map = {};
		var ax = ['0','red','mercedes','3.14','3'];
		var answer = '';
		var total = 0;
		var ttl = 0;
		var g;
		var c = 0;
		var newCount = jQuery('.pass .mm-survey-item.bingo').length;

		jQuery('.mm-survey-results-container .mm-survey-results-list').html('');

		var list = []
		jQuery('.mm-survey-item.bingo input').each(function(index, val) {
			var item, id, data, name, n;

			item = jQuery(this);
			id = item.data('group');
			data = item.val();
			name = item.data('item');
			var total = list.push(data);
			jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">'+(index+1)+'</span><span class="mm-item-info">'+survey[id].question + ' - ' + data+'</span></li>');
			// n = parseInt(data);
			// total += n;
			// map[name] = data;
		});
		console.log(list);
		const get = JSON.stringify(list);
		console.log(get);
		window.location.href="/script/insertQuiz?quiz="+get;

		// for (i = 1; i <= count; i++) {

		// 	var t = {};
		// 	var m = {};
		// 	answer += map[i] + '<br>';
			
		// 	if( map[i] === ax[i]) {
		// 		g = map[i];
		// 		p = 'correct';
		// 		c = 1;
		// 	}
		// 	// else if(map[i] === undefined){
		// 	// 	g = '';
		// 	// 	p = 'incorrect';
		// 	// 	c = 0;
		// 	// }
		// 	else {
		// 		g = map[i];
		// 		p = 'incorrect';
		// 		c = 0;
		// 	}

		// 	jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item '+p+'"><span class="mm-item-number">'+i+'</span><span class="mm-item-info">'+g+' - '+p+'</span></li>');

		// 	m[i] = c;
		// 	ttl += m[i];

		// }

		// var results;
		// results = ( ( ttl / count ) * 100 ).toFixed(0);

		// jQuery('.mm-survey-results-score').html( results + '%' );

	}

	function goBack() {
		jQuery('.mm-back-btn').on('click', function() {
			jQuery('.mm-survey-bottom').slideDown();
			jQuery('.mm-survey-results').slideUp();
		});
	}

	jQuery('#datetimepicker-15').datetimepicker();

});

