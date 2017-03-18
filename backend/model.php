<?php

$request = file_get_contents("php://input");
$model = file_get_contents("data.json");

if($request) {
    /* удаление елемента из массива */
    if (json_decode($request)->action == "remove"){
        $index = (int)json_decode($request)->index;
        $itemsList = json_decode($model);
        array_splice($itemsList->items, $index, 1);
        $model = json_encode($itemsList);
        file_put_contents("data.json",$model);
        echo true;
    }
    /* добавление елемента в массив */
    if (json_decode($request)->action == "add"){
        $newItem = json_decode($request)->element;
        $itemsList = json_decode($model);
        array_push($itemsList->items, $newItem);
        $model = json_encode($itemsList);
        file_put_contents("data.json",$model);
        echo true;
    }

} else {

    /* отправка данных при запросе без параметров */
    echo $model;
}

