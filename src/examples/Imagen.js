import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Imagen = () => {
  return (
    <Wrapper>
      <article>
        <h4>constraiented/default</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="tracedSVG"
          className="example-img"
          as="section"
        />
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="blurred"
          className="example-img"
          as="div"
          layout="fixed"
          width={200}
        />
      </article>
      <article>
        <h4>full width</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="dominantColor"
          className="example-img"
          as="article"
          layout="fullWidth"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
    height: 300px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    .example-img {
      height: 200px;
    }
  }
`

export default Imagen
