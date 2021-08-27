<div class="cndce-controls-top">
    <?php foreach(CONFIG['controls-top'] as $topControl): ?>
        <div class="cndce-control-top cndce-control-top--<?= $topControl['id'] ?>">
            <?php include( BOXXERWORLD_DIR . '/' . $topControl['icon']) ?>
            <div class="cndce-control-top--title"><?= $topControl['title'] ?></div>
        </div>
    <?php endforeach; ?>
</div>