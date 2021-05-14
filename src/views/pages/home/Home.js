import HomeSectionOne from '../../Components/homeSectionOne'
import HomeSectionTwo from '../../Components/homeSectionTwo'
import FloatImage from '../../Components/float/floatImage'

let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            ${HomeSectionOne}
            ${HomeSectionTwo}
            ${FloatImage}
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;