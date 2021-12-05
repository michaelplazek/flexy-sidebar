const menuLinks = [
  {
    label: 'Home',
    icon: 'la-home'
  },
  {
    label: 'Wilderness Camping',
    icon: 'la-campground'
  },
  {
    label: 'Day Hiking',
    icon: 'la-hiking'
  },
  {
    label: 'Mountain Conditions',
    icon: 'la-mountain'
  },
  {
    label: 'Weather',
    icon: 'la-cloud-sun'
  },
  {
    label: 'Forestry',
    icon: 'la-tree'
  },
  {
    label: 'Maps',
    icon: 'la-map'
  },
];

const toggleMenu = () => {
  const [sidebar] = document.getElementsByClassName('sidebar');
  if (sidebar.className.includes('collapsed')) {
    sidebar.className = 'sidebar expanded';
  } else {
    sidebar.className = 'sidebar collapsed';
  }

  const links = document.getElementsByClassName('link-text');
  for (let link of links) {
    if (link.className.includes('hidden')) {
      link.className = 'link-text';
    } else {
      link.className = 'link-text hidden';
    }
  }
}

const addHoverStyles = (link) => link.className = 'link hovered';
const removeHoverStyles = (link) => link.className = 'link';

(() => {
  // add the click listener to the hamburger menu
  document.querySelector('#hamburger').addEventListener('click', toggleMenu);

  // create and append the links
  menuLinks.map(({ label, icon }) => {
    // create the elements to be appended to the DOM
    const a = document.createElement('a');
    const i = document.createElement('i');
    const p = document.createElement('p');

    // add classes to menu items
    a.className = 'link';
    i.className = `la-2x las ${icon} icon`;
    p.className = 'link-text hidden';
    p.innerText = label;

    // connect menu item elements
    a.appendChild(i);
    a.appendChild(p);

    // add listeners to menu items for hover effect
    a.addEventListener('mouseover', () => addHoverStyles(a));
    a.addEventListener('mouseout', () => removeHoverStyles(a));

    // attach to the DOM
    document.querySelector('.links').appendChild(a);
  })
})()
