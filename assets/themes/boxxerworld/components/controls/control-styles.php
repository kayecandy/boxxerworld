<div class="container pt-2">
    <div class="row">
        <div class="col pe-0">
            <p class="cndce-styles-title text-uppercase"><?= CONFIG['leg-cuts']['title'] ?></p>

            <hr class="mb-4">


            <div class="row">
                <?php foreach(CONFIG['leg-cuts']['choices'] as $legCuts): ?>
                    <div class="col-auto col-legcut col-legcut-<?= $legCuts['id'] ?> text-center">
                        <div class="cndce-legcut">
                            <?php include BOXXERWORLD_DIR . '/' . $legCuts['img'] ?>
                            <div class="cndce-legcut-title mt-2">
                                <?= $legCuts['title'] ?>
                            </div>

                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

        </div>
        <div class="col ps-0">
            <p class="cndce-styles-title text-uppercase"><?= CONFIG['sizes']['title'] ?></p>

            <hr class="mb-4">

            <div class="row">
                <?php foreach(CONFIG['sizes']['choices'] as $sizes): ?>
                    <div class="col-auto col-sizes col-sizes-<?= $sizes['id'] ?> text-center">
                        <div class="cndce-size">
                            <?php include BOXXERWORLD_DIR . '/' . $sizes['img'] ?>
                            <div class="cndce-size-title mt-2">
                                <?= $sizes['title'] ?>
                            </div>

                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

        </div>
    </div>
</div>