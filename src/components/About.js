import React from "react";
import amazon from "../images/amazon.png";
import flipkart from "../images/flipkart.jpg";
import myntra from "../images/myntra.jpeg";
import snapdeal from "../images/snapdeal.png";
import "../App.css";

function About() {
  return (
    <div>
      <h1 className="text-bg-success p-1" style={{ fontSize: "50px" }}>
        Web Development with IBM November Major Project
      </h1>
      <h3>E-Commerce</h3>
      <p>
        E-Commerce (Electronic Commerce) is the trading of goods and services on
        the internet. It is your bustling city center or brick-and-mortar shop
        translated into zeroes and ones on the internet superhighway.
      </p>
      <h3>E-Commerce Website</h3>
      <p>
        An e-commerce website is one that allows people to buy and sell physical
        goods, services, and digital products over the internet rather than at a
        brick-and-mortar location. Through an e-commerce website, a business can
        process orders, accept payments, manage shipping and logistics, and
        provide customer service.
      </p>
      <p style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
        The most popular ecommerce websites in India are:
      </p>
      <h3>Types of E-Commerce:</h3>
      <p>
        Ecommerce takes as many different forms as there are various ways to
        shop online channels. A few common business models that shape the world
        of ecommerce are:
      </p>
      <div>
        <li>
          B2C – Businesses sell to individual consumers (end-users). The most
          common model with many variations.
        </li>
        <li>
          B2B – Businesses sell to other businesses. Often the buyer resells
          products to the consumer.
        </li>
        <li>
          C2B – Consumers sell to businesses. C2B businesses allow customers to
          sell to other companies.
        </li>
        <li>
          C2C – Consumers sell to other consumers. Businesses create online
          marketplaces that connect consumers.
        </li>
        <li>B2G – Businesses sell to governments or government agencies.</li>
        <li>C2G – Consumers sell to governments or government agencies.</li>
        <li>G2B – Governments or government agencies sell to businesses.</li>
        <li>G2C - Governments or government agencies sell to consumers.</li>
      </div>
      <br />
      <div>
        <h3>Components that ensure the success of an ecommerce website are:</h3>
        <li>Great Products</li>
        <li>A compelling brand story</li>
        <li>A target audience</li>
        <li>A smooth online experience</li>
        <li>Timely order fulfillment</li>
      </div>
      <br />
      <div>
        <h3>Advantages of E-Commerce:</h3>
        <li>Is growing rapidly</li>
        <li>Offers global marketing reach</li>
        <li>Provides the ease of ordering products online</li>
        <li>Generally involves lower operating costs</li>
        <li>Gives direct-to-consumer access</li>
      </div>
      <br />
      <div>
        <h3>Challenges of E-Commerce:</h3>
        <li>Limited face-to-face interaction</li>
        <li>Technical difficulties</li>
        <li>Data security can be a challenge</li>
        <li>Shipping and fulfillment at scale</li>
      </div>
      <br />
      <div>
        <h3>Popular E-Commerce websites are:</h3>
        <h4>Amazon</h4>
        <img src={amazon} alt="Amazon" className="zoom" />
        <br />
        <p>
          Amazon is widely regarded as the biggest digital marketplace in the
          world. It has transformed the way we shop online. This multinational
          company focuses on delivering ecommerce solutions to customers and
          sellers around the world.Amazon offers its business operations – such
          as its warehouses, packaging, shipping, advertising and checkout
          services – to other businesses.It’s widely regarded as one of the most
          influential economic forces in the world and has had a huge impact on
          the way we live and shop.
        </p>
        <p>
          Amazon is one of the five “big” companies in the United States
          technology industry, ranked alongside Facebook, Microsoft, Apple, and
          Google. So Amazon is also in the "fulfillment" business, helping other
          companies take care of their customers from the point of sale to
          delivery of the product
        </p>
        <h4>Flipkart</h4>
        <img src={flipkart} alt="Flipkart" className="zoom" />
        <br />
        <p>
          Flipkart is one of India’s leading E-commerce marketplaces and is
          headquartered in Bengaluru. The company initially started as an online
          bookstore. Later, it also started selling other items such as movies
          and mobile phones. Now the company offers more than 80 million
          products spread across more than 80 categories. It has the capacity to
          delivery eight million shipments per month.
        </p>
        <p>
          Flipkart has pledged to completely transition to electric vehicles
          (EVs) by 2030 across its E-commerce value chain by partnering with
          Climate Group’s global electric mobility initiative, EV100.
        </p>
        <h4>Myntra</h4>
        <img src={myntra} alt="Myntra" className="zoom" />
        <br />
        <p>
          Myntra is a one stop shop for all your fashion and lifestyle needs.
          Being India's largest e-commerce store for fashion and lifestyle
          products, Myntra aims at providing a hassle free and enjoyable
          shopping experience to shoppers across the country with the widest
          range of brands and products on its portal. The brand is making a
          conscious effort to bring the power of fashion to shoppers with an
          array of the latest and trendiest products available in the country.
        </p>
        <p>
          Myntra understands its shoppers' needs and caters to them with choice
          of apparel, accessories, cosmetics and footwear from over 500 leading
          Indian and international brands. Prominent brands include Adidas,
          Nike, Puma, Catwalk, Inc 5, United Colors of Benetton, FCUK,
          Timberland, Avirate, FabIndia and Biba to name a few. You can also
          shop from some recently introduced labels such as - Roadster, Sher
          Singh, Dressberry, Kook N Keech and ETC.
        </p>
        <h4>Snapdeal</h4>
        <img src={snapdeal} alt="Snapdeal" className="zoom" />
        <br />
        <p>
          Snapdeal is India's leading pure-play value Ecommerce platform.It
          brings together a wide assortment of good quality and value- priced
          merchandise on its platform. Snapdeal's vision is to enable the
          shoppers of Bharat experience the joy of living their aspirations
          through reliable, value-for-money shopping.Snapdeal suppliers operate
          under a well structured ecosystem that enables them to offer great
          quality products at affordable prices.
        </p>
        <p>
          With a personalized, multilingual interface and cutting edge
          technology, Snapdeal has simplified the shopping experience for its
          value-conscious buyers by showcasing the most relevant products-
          products that are a good functional fit with their needs and of a
          quality that lasts- thereby delivering true value to its
          customers.Snapdeal's mission is to become India’s value lifestyle
          omni-channel leader.
        </p>
      </div>
    </div>
  );
}

export default About;
