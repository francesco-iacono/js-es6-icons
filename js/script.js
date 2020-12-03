// milestone 3:
// aggiungere una select per filtrare le icone in
// base al tipo.
// Popolare le options della select dinamicamente
// e, ogni volta che cambia il valore selezionato,
// visualizzare le icone corrispondenti.
$(document).ready(
  function () {
    const icons = [
      {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "tractor",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "spider",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "space-shuttle",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "truck-monster",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "wheelchair",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "tram",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "fighter-jet",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "helicopter",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
    ];

    const colorArray = [
      '#000080',
      '	#696969',
      '	#e9967a'
    ];

    const container = $('#icon');

    const types = getType(icons);
    // console.log(types);

    const colorIcon = addColor(icons, colorArray, types);
    // console.log(colorIcon);
    print(colorIcon, container);
    selectTypePrint($('select'), types);

    $('select').change(
      function () {
        const selectiontType = $(this).val();
        console.log(selectiontType);
        if (selectiontType == '') {
            print(colorIcon, container);
        } else {
            const filteredIcon = colorIcon.filter((element) => {
              return element.type == selectiontType;
            }
          );
          print(filteredIcon, container);
        }
      }
    );

  }
);


// // FUNZIONI----------------------------------------------
function print(array, container) {

    container.html('');

    array.forEach((element, i) => {

    const {name, prefix, family, color} = element;
    // console.log(element);

    container.append(`
      <div>
        <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
        <h5>${name.toUpperCase()}</h5>
      </div>
      `);
    }
  );
}

function getType(array) {

  const typesArray = [];

  array.forEach((element, i) => {
    if (typesArray.includes(element.type) == false) {
      typesArray.push(element.type);
    }
    // console.log(element.type);
  });
  return typesArray;
}

function addColor(iconsArray, colorArray, typesArray) {


          const colorIcons = iconsArray.map(
            (element) => {
              const indexType = typesArray.indexOf(element.type);
              const color = colorArray[indexType];
              // console.log(color);

              const newElement = {...element,
                color
              }
              return newElement;
            }
          );
          return colorIcons;
}

function selectTypePrint(select, types) {

          types.forEach(
            (element) => {
              select.append(`
                  <option value="${element}">${element}</option>
                `);
            }
          );
}
