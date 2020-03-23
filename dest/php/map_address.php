<?php

function getAddress_info($address){
	$info=array('','','','');

	$ch = curl_init();
	$options = array(CURLOPT_URL => 'http://maps.googleapis.com/maps/api/geocode/json?address='.$address.'&sensor=false&language=zh-TW',
	CURLOPT_HEADER => false,
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_USERAGENT => "Google Bot",
	CURLOPT_FOLLOWLOCATION => true
	);
	curl_setopt_array($ch, $options);
	$output = curl_exec($ch);
	curl_close($ch);
	$data=json_decode($output,true);
	//print_r($data);看所有傳回的資料
	$info[0]=$data['results'][0]['address_components'][4]['long_name'];//取得縣市
	$info[1]= $data['results'][0]['address_components'][3]['long_name'];//取得區

	$info[2]= $data['results'][0]['geometry']['location']['lat'];//取得緯度
	$info[3]= $data['results'][0]['geometry']['location']['lng'];//取得經度
	 
	return $info;
}

$a=getAddress_info('台北市民權西路104號10樓');

print_r($a);

?>