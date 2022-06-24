import * as React from "react";
import "./AboutUs.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function AboutUs({isOpen, setIsOpen }) {
  return (
    <div className="about-us">
      <Navbar />
      <Sidebar isOpen = {isOpen} setIsOpen={setIsOpen}/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor
        diam et dui bibendum, at posuere nisl eleifend. Nunc et libero quis mi
        cursus luctus. Sed laoreet orci sit amet quam blandit, id tempus nisl
        euismod. Donec fringilla tellus mollis diam euismod semper. Quisque
        vulputate vehicula ligula, quis gravida arcu imperdiet in. Aenean
        bibendum lorem a augue porttitor, at porttitor est ullamcorper.
        Phasellus porta id mi in efficitur. Vestibulum vel maximus quam, eu
        efficitur sapien. Proin sit amet massa viverra, aliquam justo eget,
        volutpat lectus. Aliquam fermentum libero metus, non rhoncus justo
        mattis eget. Nullam auctor, tellus ut ultrices sollicitudin, felis dolor
        consectetur est, eu dictum diam turpis varius lorem. Pellentesque vitae
        mattis libero, malesuada interdum elit. Integer quis nulla nec dui
        commodo tincidunt in et tortor. Etiam mollis ligula vestibulum ipsum
        ornare ullamcorper. Vivamus in mi id ligula consequat sagittis.
      </p>

      <p>
        Fusce aliquet justo erat, non accumsan lorem interdum sed. Sed interdum
        pretium arcu, quis blandit ligula efficitur eget. Nullam id blandit
        mauris, id egestas urna. Fusce sollicitudin mollis laoreet. In elementum
        viverra lacus, id pretium nisi vestibulum vel. Donec luctus dolor sed
        semper cursus. Donec sit amet ipsum sapien.
      </p>

      <p>
        Integer non ex ipsum. Nunc nulla diam, suscipit non turpis sit amet,
        convallis ultrices arcu. Curabitur blandit urna tortor, vel dignissim
        nunc vestibulum eget. Proin viverra libero ut nibh varius molestie. Nunc
        eu faucibus sapien. Vestibulum pellentesque porttitor consectetur.
        Nullam ut tristique arcu. Proin iaculis massa non eleifend volutpat.
        Donec sit amet blandit dolor. Duis nec congue est, varius dapibus urna.
      </p>

      <p>
        Nullam pulvinar nisl nisi, ac facilisis risus egestas eu. Donec sed
        commodo magna. Quisque luctus, nisi ut consequat tempus, odio nunc
        maximus elit, vitae scelerisque purus neque eu magna. Fusce nisi ipsum,
        tempor ac scelerisque at, sagittis nec purus. Nullam nec lectus eu odio
        laoreet sagittis bibendum nec nulla. Nullam ac iaculis nisl. Donec in
        ligula semper, faucibus sapien vitae, rhoncus velit. Donec lobortis erat
        fringilla mi lacinia tempus. Nunc vel lorem ut ex varius placerat a quis
        ex. Fusce iaculis lorem et finibus malesuada.
      </p>

      <p>
        Nunc et tempor erat. Cras ornare tristique volutpat. Nunc sodales orci
        augue, sit amet commodo elit fermentum sed. Nam sed congue orci. Nam
        egestas et metus vel tempor. Phasellus ullamcorper in leo non efficitur.
        Aliquam erat volutpat. Aenean in finibus ex. Proin vulputate ipsum eu
        elit pulvinar lacinia. Nam tempor velit viverra, sollicitudin mi ac,
        aliquam felis. Pellentesque orci libero, elementum at ligula in, lacinia
        rhoncus magna.
      </p>
    </div>
  );
}
