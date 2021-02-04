"use strict";
function handleError(res, err) {
    console.log('handling', err);
    return res.status(500).json({
        message: 'unexpected error',
        error: err.message
    });
}
module.exports = handleError;
