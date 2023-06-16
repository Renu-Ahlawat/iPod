import React from 'react';
import artistImage from './assets/images/artist.jpg';

class Artists extends React.Component{
    
    render(){
        return(
            <div style={styles.artistsContainer}>
                <img style={{height:"50%", width:"49%"}} src={artistImage}></img>
                <div style={{marginLeft: 10, marginTop: 15}}>
                    <h3>Jung Kook</h3>
                    <p>Jeon Jung-kook born @ September 1, 1997, known mononymously as Jungkook, is a South Korean singer. He is a vocalist band BTS.</p>
                </div>
                
            </div>
        );
    }
    
}

const styles = {
    artistsContainer : {
        display: 'flex',
        flexDirection: 'row'
    }
}

export default Artists;