import React from 'react'

export default function Header() {


    return (


        <header id="header">
         
          <section id='header_top'>
            <div className="container">

              <div className="row" style={{display:'grid', gridTemplateColumns:"20% 60% 20%"}}>

                <div ></div>

                <div id="header_top_left" >
                  <img src='../Rep_Public_logo.png' height={'120px'} width={'120px'}/>
                  <img src='../meteo_france_logo_2.png' height={'80px'} width={'90px'} style={{scale:'0.85'}} />

                  <div id="header_top_middle">
                    <div id="barre_search" >
                      <form className='recherche'>
                        <input placeholder='Rechercher une ville, un pays ...' className="input_research" size={40} />
                        <img src='../loupe.png' className='icon_research'/>
                        <button type='submit' title='lancer la recherche' aria-label='lancer la recherche'><i className="fa fa-search"></i></button>

                      </form>
                    </div>
                  </div>

                <div id="header_top_right">
                  <div  className="div_icon_reseaux" style={{ display:"grid", gridTemplateColumns:'repeat(3,25px)', gap:'20px'}}>
                   <img src='../facebook(1).png' id='facebook' className="icon_reseaux" />
                   <img src='../twitter(1).png' id='twitter' className="icon_reseaux" />
                   <img src='../linkedin-logo.png' id='linkedin' className="icon_reseaux" />
                  </div>

                  <img src='../bell.png' id='bell'  />
                </div>

              </div>
                

            
            </div>
          </div>
        </section>



        {/* <div className='stickyHeader' style={{position:isSticky ?'fixed':'absolute' }}> */}
            <div id="header_middle" style={{display:'grid', gridTemplateColumns:"20% 60% 20%" }}>
                <div></div>


                {/* Les onglets ne doivent pas être en fraction , ils ne sont pas responsive ( uniquement avec le @media)  */}
                <div id='header_middle_middle' style={{ display:'grid' , gridTemplateColumns:'1.2fr 1.2fr 1.2fr 1.2fr 1.2fr 1.2fr 0.5fr '}}>

                  <a href='/' id='prevision' className='onglet' >
                    <img className='icon'  src='../meteo.png' />
                    <text className="libelle" >PREVISIONS</text>
                  </a>

                  <a href='/meteo-marine' id='meteo_marine' className='onglet' >
                    <img className='icon'  src='../vagues.png' />
                    <text className="libelle" >METEO MARINE</text>
                  </a>

                  <a href='/meteo-montagne' id='meteo_montagne'className='onglet' >
                    <img className='icon'  src='../montagnes-enneigees.png' />
                    <text className="libelle" >METEO MONTAGNE</text>
                  </a>

                  <a href='/climat' id='climat' className='onglet' >
                    <img className='icon'  src='../globe.png' />
                    <text className="libelle" >CLIMAT</text>
                    <img className='icon_down' src='../down.png' />
                  </a>

                  <a href='/actualites-et-dossiers' id='actus_dossiers' className='onglet' >
                    <img className='icon' src='../article.png' />
                    <text className="libelle" >ACTUS & DOSSIERS</text>
                    <img className='icon_down' src='../down.png' />
                  </a>

                  <a href='https://services.meteofrance.com/' id='services' className='onglet' >
                    <img className='icon' src='../la-personne.png' />
                    <text className="libelle" >NOS SERVICES</text>
                  </a>

                  <a  className='onglet' >
                    <img id='burger_menu'src='../menu.png' />
                  </a>

                </div>

                <div ></div>
            </div>

          

            <section id='header_bottom'>
              <div className="container">
                <div className="row">
                  <div id="barre-favoris">
                        <div id="add-favorite" style={{display:'grid', gridTemplateColumns: "20% 60% 20%"}}>
                          <div></div>
                          <div className="autocomplete" style={{padding:'5px', margin:"5px", color:'white' , fontWeight:'600' , fontSize:'12px'}}>
                            <span>Ajouter une ville</span>
                            <button>
                              <img src="../plus.png"  />
                            </button>
                          </div>
                          <div></div>
                        </div>
                  </div>
                </div>
              </div>
              </section>
          {/* </div>  */}
        </header>

        
 
    )
  }