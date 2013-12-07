//#1：生成动画需要的数据类 
CCTexture2D *texture=CCTextureCache::sharedTextureCache()->addImage("pic2476.png"); 
CCSpriteFrame *frame0=CCSpriteFrame::frameWithTexture(texture,CCRectMake(32*0, 48*0, 32, 48)); 
CCSpriteFrame *frame1=CCSpriteFrame::frameWithTexture(texture,CCRectMake(32*1, 48*0, 32, 48)); 
CCSpriteFrame *frame2=CCSpriteFrame::frameWithTexture(texture,CCRectMake(32*2, 48*0, 32, 48)); 
CCSpriteFrame *frame3=CCSpriteFrame::frameWithTexture(texture,CCRectMake(32*3, 48*0, 32, 48)); 
 
CCMutableArray<CCSpriteFrame*> *animFrames = new CCMutableArray<CCSpriteFrame*>(4); 
animFrames->addObject(frame0); 
animFrames->addObject(frame1); 
animFrames->addObject(frame2); 
animFrames->addObject(frame3); 
 
CCAnimation *animation = CCAnimation::animationWithFrames(animFrames, 0.2f); 
animFrames->release();  
//#2：初始化并设置Sprite 
CCSprite *sprite = CCSprite::spriteWithSpriteFrame(frame0);//设置一个初始frame 
sprite->setPosition( ccp( s.width/2, s.height/2) ); 
addChild(sprite); 
 
//#3：使用animation生成一个动画动作animate 
CCAnimate *animate = CCAnimate::actionWithAnimation(animation, false); 
sprite->runAction(CCRepeatForever::actionWithAction(animate));//重复播放 