import { Container } from "./style"
import GitHubImage from '../../assets/github.svg'
import LinkedinImage from '../../assets/linkedin.svg'
import CodeImage from '../../assets/code.svg'

export const SocialLinks = () => {

    const GITHUB_LINK = "https://github.com/GustavoMoraes22"
    const LINKEDIN_LINK = "https://linkedin.com/in/gustavo-de-moraes"

    return (

        <Container>
            <div>
                <a href={GITHUB_LINK} target="_blank" rel='noreferrer'>
                    <img src={GitHubImage} alt="GitHub" />
                </a>

                <a href={LINKEDIN_LINK} target="_blank" rel='noreferrer'>
                    <img src={LinkedinImage} alt="Linkedin" />
                </a>
            </div>

            <div>
                <img src={CodeImage} alt="code" />
                Gustavo de Moraes
            </div>
        </Container>
    )

}