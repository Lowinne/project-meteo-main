import React from 'react'

export default function Footer() {

    return (
      <>
        <div className='grid' >
              <div className='title_top_consult' >
                  <span>
                    Top 20 des villes les plus consultés
                  </span>
            </div>
              <hr className='separateur' ></hr>
            <ul className='top_ville_consult' >
                    <li className="ville_consult" >
                      METEO PARIS
                    </li>
                    <li className="ville_consult">
                      METEO TOULOUSE
                    </li >
                    <li className="ville_consult">
                      METEO LYON
                    </li>
                    <li className="ville_consult">
                      METEO BORDEAUX
                    </li>
                    <li className="ville_consult">
                      METEO NANTES
                    </li>
                    <li className="ville_consult">
                      METEO MONTPELLIER
                    </li>
                    <li className="ville_consult">
                      METEO RENNES
                    </li>
                    <li className="ville_consult">
                      METEO MARSEILLE
                    </li>
                    <li className="ville_consult">
                      METEO LILLE
                    </li>
                    <li className="ville_consult">
                      METEO ANGERS
                    </li>
                    <li className="ville_consult">
                      METEO GRENOBLE
                    </li>
                    <li className="ville_consult">
                      METEO TOURS
                    </li>
                    <li className="ville_consult">
                      METEO DIJON
                    </li>
                    <li className="ville_consult">
                      METEO LIMOGES
                    </li>
                    <li className="ville_consult">
                      METEO PAU
                    </li>
                    <li className="ville_consult">
                      METEO STRASBOURG
                    </li>
                    <li className="ville_consult">
                      METEO NANCY
                    </li>
                    <li className="ville_consult">
                      METEO BREST
                    </li>
                    <li className="ville_consult">
                      METEO BESANCON
                    </li>
                    <li className="ville_consult">
                      METEO LE MANS
                    </li>
                    <li className="ville_consult">
                    </li>
              </ul>

          <div className='button_reseaux'>
            <div>
              <button className='bouton'>
                <img className='icon_bouton' src='../facebook(1).png'/>
              </button>
            </div>
            <div>
              <button className='bouton' >
                <img className='icon_bouton' src='../twitter(1).png' style={{scale:'0.5'}}/>
              </button>
            </div>
            <div>
              <button className='bouton'>
                <img className='icon_bouton' src='../linkedin-logo.png' style={{scale:'0.5'}}/>
              </button>
            </div>
            <div>
              <button className='bouton'>
                <img className='icon_bouton' src='../instagram(1).png' style={{scale:'0.5'}}/>
              </button>
            </div>
            <div>
              <button className='bouton'>
                <img className='icon_bouton' src='../youtube(1).png'/>
              </button>
            </div>
            </div>

            <div className='rubrique'>
              <div>
                <img className="right_arrow" src='../right-arrow.png'/>
                <div className='libelle' >Légende</div>
              </div>
              <div>
                <img className="right_arrow" src='../right-arrow.png'/>
                <div className='libelle' >Mentions Légales</div>
              </div>
              <div>
                <img className="right_arrow" src='../right-arrow.png'/>
                <div className='libelle'>Gestion des Cookies</div>
              </div>
              <div>
                <img className="right_arrow" src='../right-arrow.png'/>
                <div className='libelle'>Politique de Confidentialité</div>
              </div>
              <div>
                <img className="right_arrow" src='../right-arrow.png'/>
                <div className='libelle'>Droits de Reproduction</div>
              </div>
              <div>
                <img className="right_arrow" src='../right-arrow.png'/>
                <div className='libelle'>Consentement</div>
              </div>
              <div>
                <img className="right_arrow" src='../right-arrow.png'/>
                <div className='libelle' >Accessibilité</div>
              </div>
              <div>
                <img className="right_arrow" src='../right-arrow.png'/>
                <div className='libelle' >Autres Sites</div>
              </div>
              <div>
                <img className="right_arrow" src='../right-arrow.png'/>
                <div className='libelle'>Contact</div>
              </div>
          
          </div>
          </div>
          

        <div style={{backgroundColor:'white', display:'flex', padding:'1%', justifyContent:'center'}} >
          <img src='../Rep_Public_logo.png' height={'120px'} width={'120px'}/>
          <img src='../meteo_france_logo_2.png' height={'80px'} width={'90px'} style={{scale:'0.8'}} />
        </div>
        <div style={{backgroundColor:'#145e9a', paddingTop:"1%", paddingBottom:"1%" ,color:"white", display:'flex', justifyContent:'center',fontFamily: "Quicksand",fontWeight:'600'}} >
            @ 2023 Copyright - Météo France
        </div>

      </>
    )
  }