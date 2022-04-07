import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipisList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" description="this is about page" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae, sed.
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, omnis
              sit pariatur reprehenderit consequatur blanditiis expedita
              veritatis vitae ullam fuga?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur facilis rem minima est fugiat placeat fugit sunt
              accusamus quasi officiis!
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="person pouring salt in bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { fetured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
