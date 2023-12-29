module.exports = async (ctx, next) => {
  ctx.props = Object.assign(ctx.query || {}, ctx.request.body || {})

  try {
    await next()

    if (!ctx.body) {
      ctx.assert(ctx.result, 404, 'Not Found')
      
     if (!ctx.result) {
const axios = require('axios').default;
        // Menampilkan teks
  ctx.body = 'post => /generate ✓.';
  try {
    // Mengambil gambar dari URL
    const imageUrl = 'https://telegra.ph/file/92688e0c1a8107bb931cf.jpg'; // Ganti dengan URL gambar eksternal
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    // Menampilkan gambar
    ctx.type = 'image/jpeg'; // Tipe gambar (sesuaikan dengan tipe gambar yang diambil)
    ctx.body = imageResponse.data;
  } catch (error) {
    console.error('Error fetching image:', error);
    ctx.status = 500;
    ctx.body = 'Error fetching image';
  }
  }
      if (ctx.result.error) {
        ctx.status = 400
        ctx.body = {
          ok: false,
          error: {
            code: 400,
            message: ctx.result.error
          }
        }
      } else {
        if (ctx.result.ext) {
          if (ctx.result.ext === 'webp') ctx.response.set('content-type', 'image/webp')
          if (ctx.result.ext === 'png') ctx.response.set('content-type', 'image/png')
          ctx.response.set('quote-type', ctx.result.type)
          ctx.response.set('quote-width', ctx.result.width)
          ctx.response.set('quote-height', ctx.result.height)
          ctx.body = ctx.result.image
        } else {
          ctx.body = {
            ok: true,
            result: ctx.result
          }
        }
      }
    }
  } catch (error) {
    console.error(error)
    ctx.status = error.statusCode || error.status || 500
    ctx.body = {
      ok: false,
      error: {
        code: ctx.status,
        message: error.message,
        description: error.description
      }
    }
  }
}
