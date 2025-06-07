import * as S from "./styles";
import heroImg1 from "../../assets/hero-img1.svg";
import heroImg2 from "../../assets/hero-img2.svg";

export function Hero(){
    return (
      <S.MainContainer>

        <S.TextContainer>

          <S.TextContainerH1>
            Simplifique seus estudos, <strong>conquiste</strong> sua vaga!
          </S.TextContainerH1>

          <img src={heroImg1} alt="ilustração de uma mulher com um óculos VR" />

          <S.TextContainerH2>
            Nosso objetivo é mantê-lo motivado e preparado para alcançar a tão
            sonhada vaga na <span>universidade</span>.
          </S.TextContainerH2>
          
          <S.TextContainerButtons>
            <a className="singUp" href="#">Cadastre-se</a>
            <a className="login" href="#">Login</a>
          </S.TextContainerButtons>

        </S.TextContainer>

        <S.ImageContainer>
            <img src={heroImg2} alt="ilustração de uma estudante comemorando o fim da graduação" />
        </S.ImageContainer>

      </S.MainContainer>
    );
}