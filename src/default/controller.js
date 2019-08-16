/**
 * Default handler. Returns current time.
 *
 */

export function handlerIndex(req, res, next) {
  res.json({
    data: {
      date: new Date()
    }
  });
}
