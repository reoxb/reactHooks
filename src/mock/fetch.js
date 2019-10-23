export default function(url) {
  if(url === '/profile') {
    return Promise.resolve({
      json: () =>
        Promise.resolve(
            [
              {
                name: 'Citlali',
                lastName: 'Perez'
              }
          ]
        )
    })
  } // end if
}