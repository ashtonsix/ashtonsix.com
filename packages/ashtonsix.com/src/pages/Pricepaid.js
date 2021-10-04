import {useState} from 'react'
import {Link} from 'react-router-dom'
import rightmove from './rightmove.png'

const Pricepaid = () => {
  const [fullscreen, setFullscreen] = useState(false)
  return (
    <div className="container" style={{maxWidth: '48em'}}>
      <h1>
        <Link to="/">Ashton Six</Link>'s pricepaid, go back to the{' '}
        <Link to="/portfolio">portfolio</Link>
      </h1>
      <p>
        When my friend wanted to buy a house in South England she began by
        researching average house prices and how they varied across different
        towns, in the hope of finding someplace affordable. She looked at 100s
        of listings online and visited 20-ish of them in-person, and eventually
        found something that worked for her.
      </p>
      <p>
        The interface my friend used for her online research looked like this
        (screenshot from{' '}
        <a target="_blank" rel="noopener" href="https://www.rightmove.co.uk/">
          rightmove.co.uk
        </a>
        ):
      </p>
      <p style={{textAlign: 'center'}}>
        <img
          style={{maxWidth: '100%', width: '36em'}}
          src={rightmove}
          alt="rightmove.co.uk"
        />
      </p>
      <p>
        I noticed three interface issues that affected the &quot;market
        research&quot; user story:
      </p>
      <ol>
        <li>
          Users cannot get a visual overview of prices in an area, as
          they&#39;re required to click into properties one-by-one
        </li>
        <li>
          The map only shows what&#39;s currently active on rightmove, which
          reflects a small subset of house sales in the UK
        </li>
        <li>
          Users can only see the price listed, but it&#39;s the price paid
          that&#39;s important in a negotiation
        </li>
      </ol>
      <p>
        I wondered whether something better could be created, had a go at it and
        created this, a map of house sale prices from 1995 to 2020 (this is
        interactive btw):
      </p>
      {fullscreen ? (
        <div>
          <div
            style={{
              position: 'fixed',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              background: '#fff',
            }}
          >
            <iframe
              key="pricepaid_demo"
              style={{
                width: '100%',
                height: 'calc(100% - 40px)',
              }}
              title="pricepaid demo"
              src="/x/pricepaid"
              loading="lazy"
            />
          </div>
          <a
            style={{
              position: 'fixed',
              bottom: 15,
              left: '2em',
            }}
            onClick={(e) => {
              e.preventDefault()
              setFullscreen(false)
            }}
            href="/p/pricepaid"
          >
            back
          </a>
        </div>
      ) : (
        <iframe
          key="pricepaid_demo"
          style={{width: '100%', height: 600}}
          title="pricepaid demo"
          src="/x/pricepaid"
          loading="lazy"
        />
      )}
      <a
        onClick={(e) => {
          e.preventDefault()
          setFullscreen(true)
        }}
        href="/f/pricepaid"
      >
        fullscreen
      </a>
      <h2 id="how-i-did-it">How I did it</h2>
      <p>
        I spoke to an expert first. I shared a coworking space with a property
        developer, someone who buys houses and makes them nicer so they can sell
        them for more money, and he was my guy. He gave me a tour of the four
        different products he used for market research, their features and
        pricing tiers, along with his product-specific likes, dislikes, and
        productivity tricks.
      </p>
      <p>
        Together they solved the problems I&#39;d identified and more. However,
        their pricing was exorbitant for a non-professional like my friend: from
        £500/year to £10,000/year depending on what you wanted. All of these
        companies essentially did the same thing: they licensed data from the
        government and made it easy to access. I figured I could get hold of
        that same data, put it on a map, and make it free for everyone.
      </p>
      <p>
        Of course, it wasn&#39;t that simple. The government has all that data
        locked away in a vault, and they do give keys out, but only to
        corporations with fat wallets. To make the map I did with government
        data you would need licenses for the National Polygon Service (
        <a href="https://use-land-property-data.service.gov.uk/datasets/nps">
          £24,000 per year
        </a>
        ) and AddressBase. AddressBase is{' '}
        <a href="https://www.cdrgroup.co.uk/sales_data_OSProducts.htm#AddressBase">
          £16,245
        </a>{' '}
        for internal business use, but costs more if you want to build a product
        with it. There&#39;s no price listed for that license, but it includes
        the Royal Mail Postcode Address File and when sold separately that costs{' '}
        <a href="https://www.poweredbypaf.com/wp-content/uploads/2021/06/20210630-2021-Pricing-Factsheet.pdf">
          £138,500
        </a>{' '}
        ($187,500). There&#39;s no way for an individual tinkerer to access this
        data.
      </p>
      <p>
        Undettered, I dug around and found two free-to-use datasets that&#39;d
        work:
      </p>
      <ul>
        <li>
          HMRC Price Paid, a government-created dataset with prices paid for
          houses, but without coordinates
        </li>
        <li>
          OpenStreetMap, a volunteer-created dataset with coordinates and
          outlines for
          <em>some</em> UK buildings
        </li>
      </ul>
      <p>And then I:</p>
      <ol>
        <li>Stitched the datasets together</li>
        <li>Adjusted the prices paid for inflation</li>
        <li>Split the new dataset into map tiles</li>
        <li>Made an interactive map that could load and display the data</li>
      </ol>
      <h3 id="stitching-the-datasets-together">
        Stitching the datasets together
      </h3>
      <p>
        The HMRC Price Paid dataset (
        <a href="https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads#single-file">
          download
        </a>
        ) was pretty straightforward, it&#39;s just a 4GB CSV with 26 million
        rows like this:
      </p>
      <table>
        <thead>
          <tr>
            <th>price_paid</th>
            <th>transaction_date</th>
            <th>postcode</th>
            <th>housenumber</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>250000</td>
            <td>2020-02-26 00:00</td>
            <td>LE8 8BX</td>
            <td>4 SHAKESPEARE ROAD</td>
          </tr>
          <tr>
            <td>240000</td>
            <td>2019-01-09 00:00</td>
            <td>LE8 8BX</td>
            <td>5 SHAKESPEARE ROAD</td>
          </tr>
        </tbody>
      </table>
      <p>
        The OpenStreetMap dataset (
        <a href="https://download.geofabrik.de/europe/great-britain.html">
          download
        </a>
        ) came as a 25GB XML file that looked like this:
      </p>
      <code className="language-xml">
        <pre>
          {`<osm>
  <way id="38078393">
    <tag k="addr:housenumber" v="4 Shakespeare Road"/>
    <nd ref="447864834"/>
    <nd ref="447864835"/>
    <nd ref="447864836"/>
    <nd ref="447864837"/>
    <nd ref="447864834"/>
  </way>
  <node id="447864834" lat="52.53038542" lon="-1.0436888"/>
  <node id="447864835" lat="52.53037399" lon="-1.0436391"/>
  <node id="447864836" lat="52.53037938" lon="-1.0433103"/>
  <node id="447864837" lat="52.5303908" lon="-1.0433600"/>
</osm>`}
        </pre>
      </code>
      <p>
        It&#39;s unclear why, but OpenStreetMap doesn&#39;t embed building
        outlines into the so-called <code>&lt;way /&gt;</code> and instead
        references them indirectly. Normally, I&#39;d just go ahead and embed
        them without thinking much, but the 25GB filesize meant that
        wouldn&#39;t be so straightforward. So I began by just splitting the XML
        out into two tables, like so:
      </p>
      <table>
        <thead>
          <tr>
            <th>housenumber</th>
            <th>outline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4 Shakespeare Road</td>
            <td>447864834, 447864835, 447864836, 447864837</td>
          </tr>
        </tbody>
      </table>
      <br />
      <table>
        <thead>
          <tr>
            <th>outline_point</th>
            <th>lat</th>
            <th>lon</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>447864834</td>
            <td>52.53038542</td>
            <td>-1.0436888</td>
          </tr>
          <tr>
            <td>447864835</td>
            <td>52.53037399</td>
            <td>-1.0436391</td>
          </tr>
          <tr>
            <td>447864836</td>
            <td>52.53037938</td>
            <td>-1.0433103</td>
          </tr>
          <tr>
            <td>447864837</td>
            <td>52.5303908</td>
            <td>-1.0433600</td>
          </tr>
        </tbody>
      </table>
      <p>
        So this gives us a house number to connect the OpenStreetMap and HMRC
        Price Paid datasets, but OpenStreetMap lacks post codes, and a house
        number alone isn&#39;t sufficient to make a match. Afterall, most towns
        have a &quot;High Street&quot;, and there are 11 streets called
        &quot;High Street&quot; in London alone. Post codes, in case you
        don&#39;t know, are areas that encompass 15-ish neighbouring houses. So
        in order to uniquely identify a house in the UK one needs both the house
        number and post code, as in &quot;4 Shakespeare Road, LE8 8BX&quot;.
        There are{' '}
        <a href="https://www.mjt.me.uk/posts/falsehoods-programmers-believe-about-addresses/">
          exceptions
        </a>
        , but this works for &gt;99% of them.
      </p>
      <p>
        I used proximity to associate a post code with each OpenStreetMap
        building. I{' '}
        <a href="https://www.freemaptools.com/download-uk-postcode-lat-lng.htm">
          downloaded
        </a>{' '}
        a list of post codes, picked out the five closest post codes to each
        building, and figured exactly one of them would match a HMRC Price Paid
        row (where the house number already matched).
      </p>
      <table>
        <thead>
          <tr>
            <th>postcode</th>
            <th>lat</th>
            <th>lon</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>LE8 8BT</td>
            <td>52.530336</td>
            <td>-1.042581</td>
          </tr>
          <tr>
            <td>LE8 8BU</td>
            <td>52.530000</td>
            <td>-1.043251</td>
          </tr>
          <tr>
            <td>LE8 8BW</td>
            <td>52.529556</td>
            <td>-1.043954</td>
          </tr>
          <tr>
            <td>LE8 8BX</td>
            <td>52.530478</td>
            <td>-1.043630</td>
          </tr>
          <tr>
            <td>LE8 8BY</td>
            <td>52.528261</td>
            <td>-1.044580</td>
          </tr>
        </tbody>
      </table>
      <p>
        With these four tables I had all the data needed to stitch things
        together. With just a few hundred-thousand rows this would&#39;ve been
        easy to do, for example, in Jupyter Notebook with Pandas. But with a few
        ten-million rows things got a bit more complicated. If faced with this
        problem today I&#39;d solve it with a data warehouse (Google BigQuery or
        AWS RedShift). I&#39;d pop the spreadsheets in, write my query, and
        press &quot;run&quot;. The data warehouse would split that query across
        1000s of servers and be done in 30 seconds. The query would:
      </p>
      <ol>
        <li>Embed the outlines into the OpenStreetMap documents</li>
        <li>
          Do a geospatial query to associate five postcodes with each
          OpenStreetMap document
        </li>
        <li>
          Join the OpenStreetMap and HMRC Price Paid datasets on{' '}
          <code>
            <em>housenumber</em>
          </code>{' '}
          with a{' '}
          <code>
            <em>where</em>
          </code>{' '}
          clause on{' '}
          <code>
            <em>postcode</em>
          </code>
        </li>
      </ol>
      <p>
        At the time however, I wanted an excuse to learn a new and cool
        programming language: Rust. Rust had three things that made it
        well-suited for this project: it&#39;s fast, it has great support for
        multi-threading, it uses a predictable amount of memory. With the
        predictable memory thing I was able to design an algorthim, count up how
        much memory it&#39;d need, and trust everything would fit on a single
        server. Rust would stick to that number, but other languages may have
        used 200% or 500% more memory than they really need, and would&#39;ve
        made predicting how big my server needed to be tricky.
      </p>
      <p>
        So I spent a few days learning Rust and writing out my program to join
        everything. I rented a big server with 64 CPUs (multi-threading!), ran
        my script, it finished 40 minutes later, and I shut the server down.
        OpenStreetMap is far from comprehensive, but the program still matched
        1,400,000 of the 26,000,000 houses sales from HMRC to building outlines.
      </p>
      <h3 id="adjusting-the-prices-for-inflation">
        Adjusting the prices for inflation
      </h3>
      <p>
        I used a bit of Machine Learning for this, a random forest specifically.
        Scroll down for the Jupyter Notebook.
      </p>
      <h3 id="splitting-the-new-dataset-into-map-tiles">
        Splitting the new dataset into map tiles
      </h3>
      <p>This was trivial.</p>
      <h3 id="making-an-interactive-map">Making an Interactive Map</h3>
      <p>
        I extended <a href="https://leafletjs.com/">Leaflet</a> to make the map.
        A piece of software by the same people that created OpenStreetMap. To
        improve the map, I would begin by showing details about the relevant
        property on mouseover.
      </p>
      <h3 id="adjusting-the-prices-for-inflation-jupyter-notebook">
        Adjusting the prices for inflation: Jupyter Notebook
      </h3>
      <iframe
        loading="lazy"
        style={{
          width: 'calc(100vw - 6em)',
          height: '90vh',
          marginBottom: '2em',
        }}
        title="jupyter notebook"
        src="/jupyter.html"
      />
    </div>
  )
}

export default Pricepaid
