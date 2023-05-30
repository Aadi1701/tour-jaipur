import React from "react";
import { useLocation } from "react-router-dom";
import Section2Data from "../../Utils/Section2Data";
import './TourDescription.css'

const TourDescription = () => {
  const location = useLocation();
  
  return (
    <div className="wrapper">
      <img className="landing-carousel" src={Section2Data.filter(item=>item.cityName == location.state.to)[0].image} />
      <div className="container mt-5">
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
          condimentum neque. Sed maximus urna quis mattis pretium. Donec id
          consectetur diam, sed varius urna. Pellentesque volutpat lacus
          vehicula aliquet euismod. Donec vitae libero porttitor, molestie dui
          a, bibendum enim. Fusce justo orci, eleifend ut vehicula eget, rutrum
          ut libero. Integer lectus sem, condimentum id varius sit amet,
          interdum gravida dolor. Nulla commodo gravida dictum. Sed sagittis
          elementum congue. Pellentesque pulvinar, metus vel imperdiet auctor,
          nulla dolor laoreet elit, eget auctor sem magna ac sem. Sed imperdiet
          laoreet lacus cursus posuere. Pellentesque mattis urna ante, in
          posuere sapien pellentesque non. Ut vestibulum diam sed velit
          bibendum, eu tincidunt urna tincidunt.
          <br />
          <br />
          Phasellus eget scelerisque mauris. Proin tempor dapibus urna, eu
          pulvinar lorem fermentum et. Aenean ut aliquam dolor. Nunc non sem
          dignissim, auctor arcu eu, scelerisque velit. Donec eu consequat
          lectus, et rhoncus ligula. Curabitur nisl dolor, semper non dui sed,
          laoreet ullamcorper eros. Integer pulvinar sem non cursus venenatis.
          Aliquam rhoncus nisi orci, et tristique lorem tempor elementum. Etiam
          luctus massa id lacus convallis, in congue lectus vehicula. Cras
          dapibus mi at vehicula aliquet.
          <br />
          <br />
          Pellentesque in est non nunc interdum pretium. Nam faucibus eget quam
          vel facilisis. Nunc non elementum massa, in mollis orci. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Proin quis diam a
          quam sodales fringilla. Donec tincidunt facilisis ex, eget malesuada
          velit dictum ut. In sed faucibus velit. In ut varius ipsum. Phasellus
          egestas risus vitae est dignissim, in feugiat nulla ullamcorper.
          Phasellus ornare suscipit dapibus. Donec nisi velit, blandit non purus
          eget, blandit dapibus purus.
          <br />
          <br />
          Maecenas blandit venenatis ipsum ut ornare. Suspendisse convallis
          venenatis ante vel rhoncus. Sed non orci tellus. In ut interdum sem.
          Etiam sed consequat dui, ac bibendum ex. Nulla vel neque egestas,
          sodales justo vel, vehicula diam. Sed suscipit, tellus quis vehicula
          mattis, massa odio semper purus, et hendrerit massa ante quis velit.
          Nunc congue consequat enim, eget suscipit eros fermentum vitae. Donec
          tincidunt turpis libero, in hendrerit nibh euismod vel. Praesent a
          iaculis diam. Maecenas porta dignissim nulla vitae malesuada. Ut eu
          ornare arcu, eu faucibus nisi. Donec iaculis bibendum elementum. Nunc
          ac libero eu orci blandit faucibus ut sit amet magna.
          <br />
          <br />
          Sed blandit tortor in ornare iaculis. Aenean at lectus ut quam dapibus
          consequat. Pellentesque congue vulputate nunc, vitae mattis ante.
          Quisque tempus, odio ut pellentesque tempus, nibh turpis scelerisque
          orci, vitae elementum felis libero vel urna. Nam vulputate neque vel
          enim dignissim, consequat ultricies nulla maximus. Sed a sollicitudin
          ante, in consectetur ipsum. Proin ac volutpat ligula. Quisque vehicula
          placerat vestibulum. Etiam interdum vehicula mauris, a iaculis ex.
          Quisque aliquam et dui ac sagittis. Nullam vitae tincidunt urna.
        </p>
      </div>
    </div>
  );
};

export default TourDescription;
