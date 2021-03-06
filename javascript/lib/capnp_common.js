/*
 * Copyright (c) 2013, Julian Scheid <julians37@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

goog.provide('capnp.common');

/** @const */ capnp.common.BITS_PER_BYTE = 8;
/** @const */ capnp.common.BITS_PER_WORD = 64;
/** @const */ capnp.common.BYTES_PER_WORD = 8;
/** @const */ capnp.common.BITS_PER_POINTER = 64;
/** @const */ capnp.common.BYTES_PER_POINTER = 8;
/** @const */ capnp.common.WORDS_PER_POINTER = 1;
/** @const */ capnp.common.POINTER_SIZE_IN_WORDS = 1;

capnp.common.roundBitsUpToBytes = function(bitCount) {
  return ((bitCount + 7) / capnp.common.BITS_PER_BYTE) >>> 0;
};

capnp.common.roundBitsUpToWords = function(bitCount) {
  return ((bitCount + 63) / capnp.common.BITS_PER_WORD) >>> 0;
};

capnp.common.roundBytesUpToWords = function(bytes) {
  return ((bytes + 7) / capnp.common.BYTES_PER_WORD) >>> 0;
};
