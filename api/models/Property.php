<?php
class Property {
    public $id;
    public $title;
    public $description;
    public $price;
    public $address;
    public $city;
    public $state;
    public $bedrooms;
    public $bathrooms;
    public $area;
    public $type;
    public $status;
    public $agent_id;
    public $created_at;
    public $updated_at;

    public function __construct($data) {
        $this->id = $data['id'];
        $this->title = $data['title'];
        $this->description = $data['description'];
        $this->price = $data['price'];
        $this->address = $data['address'];
        $this->city = $data['city'];
        $this->state = $data['state'];
        $this->bedrooms = $data['bedrooms'];
        $this->bathrooms = $data['bathrooms'];
        $this->area = $data['area'];
        $this->type = $data['type'];
        $this->status = $data['status'];
        $this->agent_id = $data['agent_id'];
        $this->created_at = $data['created_at'];
        $this->updated_at = $data['updated_at'];
    }
}
?>
