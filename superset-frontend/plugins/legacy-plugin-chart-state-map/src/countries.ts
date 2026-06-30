/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import alborz from './countries/alborz.geojson';
import ardebil from './countries/ardebil.geojson';
import bushehr from './countries/bushehr.geojson';
import chahar_mahall_and_bakhtiari from './countries/chahar_mahall_and_bakhtiari.geojson';
import east_azarbaijan from './countries/east_azarbaijan.geojson';
import esfahan from './countries/esfahan.geojson';
import fars from './countries/fars.geojson';
import gilan from './countries/gilan.geojson';
import golestan from './countries/golestan.geojson';
import hamadan from './countries/hamadan.geojson';
import hormozgan from './countries/hormozgan.geojson';
import ilam from './countries/ilam.geojson';
import kerman from './countries/kerman.geojson';
import kermanshah from './countries/kermanshah.geojson';
import khuzestan from './countries/khuzestan.geojson';
import kohgiluyeh_and_buyer_ahmad from './countries/kohgiluyeh_and_buyer_ahmad.geojson';
import kordestan from './countries/kordestan.geojson';
import lorestan from './countries/lorestan.geojson';
import markazi from './countries/markazi.geojson';
import mazandaran from './countries/mazandaran.geojson';
import north_khorasan from './countries/north_khorasan.geojson';
import qazvin from './countries/qazvin.geojson';
import qom from './countries/qom.geojson';
import razavi_khorasan from './countries/razavi_khorasan.geojson';
import semnan from './countries/semnan.geojson';
import sistan_and_baluchestan from './countries/sistan_and_baluchestan.geojson';
import south_khorasan from './countries/south_khorasan.geojson';
import tehran from './countries/tehran.geojson';
import west_azarbaijan from './countries/west_azarbaijan.geojson';
import yazd from './countries/yazd.geojson';
import zanjan from './countries/zanjan.geojson';

export const countries = {
  alborz,
  ardebil,
  bushehr,
  chahar_mahall_and_bakhtiari,
  east_azarbaijan,
  esfahan,
  fars,
  gilan,
  golestan,
  hamadan,
  hormozgan,
  ilam,
  kerman,
  kermanshah,
  khuzestan,
  kohgiluyeh_and_buyer_ahmad,
  kordestan,
  lorestan,
  markazi,
  mazandaran,
  north_khorasan,
  qazvin,
  qom,
  razavi_khorasan,
  semnan,
  sistan_and_baluchestan,
  south_khorasan,
  tehran,
  west_azarbaijan,
  yazd,
  zanjan,
};

export const countryOptions = Object.keys(countries).map(x => {
  return [
    x,
    x
      .split('_')
      .map(e => e[0].toUpperCase() + e.slice(1))
      .join(' '),
  ];
});

export default countries;
