/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2015 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */
#if defined(USE_TI_UIIPADPOPOVER) || defined(USE_TI_UIIPADSPLITWINDOW)

#import "TiUIiPadPopoverProxy.h"
#import "TiUIiPadPopover.h"
#import "TiUtils.h"
#import "TiWindowProxy.h"
#import "TiApp.h"
#import <libkern/OSAtomic.h>

#ifdef USE_TI_UITABLEVIEW
#import "TiUITableViewRowProxy.h"
#endif

TiUIiPadPopoverProxy * currentlyDisplaying = nil;

@implementation TiUIiPadPopoverProxy
@synthesize popoverView;

static NSArray* popoverSequence;

#pragma mark Internal

-(NSArray *)keySequence
{
	if (popoverSequence == nil)
	{
		popoverSequence = [[NSArray arrayWithObjects:@"contentView",@"width",@"height",nil] retain];
	}
	return popoverSequence;
}
#pragma mark Setup

-(id)init
{
    if (self = [super init]) {
        closingCondition = [[NSCondition alloc] init];
    }
    return self;
}

-(void)dealloc
{
	if (currentlyDisplaying == self) {
		//This shouldn't happen because we clear it on hide.
		currentlyDisplaying = nil;
	}
	RELEASE_TO_NIL(viewController);
	RELEASE_TO_NIL(navigationController);
	RELEASE_TO_NIL(popoverController);
	RELEASE_TO_NIL(popoverView);
    RELEASE_TO_NIL(closingCondition);
    RELEASE_TO_NIL(contentViewProxy);
	[super dealloc];
}

-(NSString*)apiName
{
    return @"Ti.UI.iPad.Popover";
}

#pragma mark Internal methods
-(void)refreshTitleBarWithObject:(id)properties
{
	if (viewController == nil)
	{
		return;
	}
	ENSURE_UI_THREAD_1_ARG(properties);
	
	BOOL animated_ = [TiUtils boolValue:@"animated" properties:properties def:YES];
	
	UINavigationItem * ourItem = [viewController navigationItem];

	[ourItem setTitle:[TiUtils stringValue:[self valueForKey:@"title"]]];
    id item = [self valueForKey:@"leftNavButton"];
    if ( (item == nil) || (item == [NSNull null]) ) {
        [ourItem setLeftBarButtonItem:nil animated:animated_];
    }
    else {
        [ourItem setLeftBarButtonItem:[item barButtonItem] animated:animated_];
    }
    item = [self valueForKey:@"rightNavButton"];
    if ( (item == nil) || (item == [NSNull null]) ) {
        [ourItem setRightBarButtonItem:nil animated:animated_];
    }
    else {
        [ourItem setRightBarButtonItem:[item barButtonItem] animated:animated_];
    }
	
	[[self navigationController] setNavigationBarHidden:[TiUtils boolValue:[self valueForKey:@"navBarHidden"]] animated:animated_];

}

-(CGSize)contentSize
{
    CGSize screenSize = [[UIScreen mainScreen] bounds].size;
    UIInterfaceOrientation orientation = [UIApplication sharedApplication].statusBarOrientation;
    
    if (orientation == UIInterfaceOrientationLandscapeRight || orientation ==  UIInterfaceOrientationLandscapeLeft ) {
        CGSize tempSize = CGSizeMake(screenSize.height, screenSize.width);
        screenSize = tempSize;
    }
    if (contentViewProxy != nil) {
        return SizeConstraintViewWithSizeAddingResizing([contentViewProxy layoutProperties], contentViewProxy, screenSize , NULL);
    }
    return SizeConstraintViewWithSizeAddingResizing(&popoverLayoutProperties, self, screenSize , NULL);
}

-(UINavigationController *)navigationController
{
	if (navigationController == nil)
	{
		navigationController = [[UINavigationController alloc] initWithRootViewController:[self viewController]];
		[TiUtils configureController:navigationController withObject:nil];
	}
	return navigationController;
}

-(void)updateContentSize
{
    CGSize newSize = [self contentSize];
    if ([TiUtils isIOS7OrGreater]) {
        [[self viewController] setPreferredContentSize:newSize];
    } else {
        [[self viewController] setContentSizeForViewInPopover:newSize];
    }
    if (contentViewProxy != nil) {
        [contentViewProxy reposition];
    } else {
        [self reposition];
    }
}



#pragma mark Accessors
-(UIViewController *)viewController
{
    if (viewController == nil) {
        if (contentViewProxy != nil) {
            if ([contentViewProxy isKindOfClass:[TiWindowProxy class]]) {
                [(TiWindowProxy*)contentViewProxy setIsManaged:YES];
                viewController =  [[(TiWindowProxy*)contentViewProxy hostingController] retain];
            } else {
                viewController = [[TiViewController alloc] initWithViewProxy:contentViewProxy];
            }
        } else {
            viewController = [[TiViewController alloc] initWithViewProxy:self];
        }
    }
    return viewController;
}

-(UIPopoverController *)popoverController
{
    if (popoverController == nil) {
        if (contentViewProxy != nil) {
            popoverController = [[UIPopoverController alloc] initWithContentViewController:[self viewController]];
        } else {
            popoverController = [[UIPopoverController alloc] initWithContentViewController:[self navigationController]];
            [self refreshTitleBarWithObject:nil];
        }
        [popoverController setDelegate:self];
        [self updateContentSize];
    }
    return popoverController;
}

#pragma mark Public-facing accessors

-(void)setRightNavButton:(id)item withObject:(id)properties
{
    if (contentViewProxy != nil) {
        DebugLog(@"[ERROR] Popover is using the contentView to display content. Ignoring.");
        return;
    }
	ENSURE_SINGLE_ARG_OR_NIL(item,TiViewProxy);
	[self replaceValue:item forKey:@"rightNavButton" notification:NO];
	[self refreshTitleBarWithObject:properties];
}

-(void)setLeftNavButton:(id)item withObject:(id)properties
{
    if (contentViewProxy != nil) {
        DebugLog(@"[ERROR] Popover is using the contentView to display content. Ignoring.");
        return;
    }
	ENSURE_SINGLE_ARG_OR_NIL(item,TiViewProxy);
	[self replaceValue:item forKey:@"leftNavButton" notification:NO];
	[self refreshTitleBarWithObject:properties];
}

-(void)setNavBarHidden:(id)item withObject:(id)properties
{
    if (contentViewProxy != nil) {
        DebugLog(@"[ERROR] Popover is using the contentView to display content. Ignoring.");
        return;
    }
	[self replaceValue:item forKey:@"navBarHidden" notification:NO];
	[self refreshTitleBarWithObject:properties];
}


-(void)showNavBar:(NSArray*)args
{
	id properties;
	if ([args count]>0)
	{
		properties = [args objectAtIndex:0];
	}
	else
	{
		properties = nil;
	}

	[self setNavBarHidden:[NSNumber numberWithBool:NO] withObject:properties];
}

-(void)hideNavBar:(NSArray*)args
{
	id properties;
	if ([args count]>0)
	{
		properties = [args objectAtIndex:0];
	}
	else
	{
		properties = nil;
	}

	[self setNavBarHidden:[NSNumber numberWithBool:YES] withObject:properties];
}


-(void)setTitle:(id)item
{
    if (contentViewProxy != nil) {
        DebugLog(@"[ERROR] Popover is using the contentView to display content. Ignoring.");
    }
	[self replaceValue:item forKey:@"title" notification:NO];
	[self refreshTitleBarWithObject:nil];
}

-(void)setWidth:(id)value
{
    if (contentViewProxy != nil) {
        [contentViewProxy setWidth:value];
    } else {
        popoverLayoutProperties.width = TiDimensionFromObject(value);
        [self replaceValue:value forKey:@"width" notification:NO];
    }
	if (popoverController != nil)
	{
		TiThreadPerformOnMainThread(^{[self updateContentSize];}, NO);
	}
}

-(void)setHeight:(id)value
{
    if (contentViewProxy != nil) {
        [contentViewProxy setHeight:value];
    } else {
        popoverLayoutProperties.height = TiDimensionFromObject(value);
        [self replaceValue:value forKey:@"height" notification:NO];
    }
	if (popoverController != nil)
	{
		TiThreadPerformOnMainThread(^{[self updateContentSize];}, NO);
	}
}

-(void)setTop:(id)value
{
    DeveloperLog(@"[WARN] PopoverProxy only supports width and height properties");
}

-(void)setBottom:(id)value
{
    DeveloperLog(@"[WARN] PopoverProxy only supports width and height properties");
}

-(void)setLeft:(id)value
{
    DeveloperLog(@"[WARN] PopoverProxy only supports width and height properties");
}

-(void)setRight:(id)value
{
    DeveloperLog(@"[WARN] PopoverProxy only supports width and height properties");
}

-(void)setCenter:(id)value
{
    DeveloperLog(@"[WARN] PopoverProxy only supports width and height properties");
}

-(void)setContentView:(id)value
{
    ENSURE_SINGLE_ARG(value, TiViewProxy);
    if (isShowing) {
        DebugLog(@"[ERROR] Changing contentView when the popover is showing is not supported");
        return;
    }
    if (contentViewProxy != nil) {
        RELEASE_TO_NIL(contentViewProxy);
    }
    contentViewProxy = [(TiViewProxy*) value retain];
    [self replaceValue:contentViewProxy forKey:@"contentView" notification:NO];
    
}


-(void)show:(id)args
{
	ENSURE_SINGLE_ARG_OR_NIL(args,NSDictionary);
	[self rememberSelf];
	
	[closingCondition lock];
	if (isDismissing) {
		[closingCondition wait];
	}
	[closingCondition unlock];

	NSDictionary *rectProps = [args objectForKey:@"rect"];
	animated = [TiUtils boolValue:@"animated" properties:args def:YES];
	directions = [TiUtils intValue:[self valueForKey:@"arrowDirection"] def:UIPopoverArrowDirectionAny];

	[self setPopoverView:[args objectForKey:@"view"]];
	
	if (rectProps!=nil)
	{
		popoverRect = [TiUtils rectValue:rectProps];
	}
	else
	{
		popoverRect = CGRectZero;
	}

	isShowing = YES;
	[self retain];

	TiThreadPerformOnMainThread(^{
		[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(updatePopover:) name:UIApplicationWillChangeStatusBarOrientationNotification object:nil];
        if (contentViewProxy != nil) {
            if ([contentViewProxy isKindOfClass:[TiWindowProxy class]]) {
                UIView* topWindowView = [[[TiApp app] controller] topWindowProxyView];
                if ([topWindowView isKindOfClass:[TiUIView class]]) {
                    TiViewProxy* theProxy = (TiViewProxy*)[(TiUIView*)topWindowView proxy];
                    if ([theProxy conformsToProtocol:@protocol(TiWindowProtocol)]) {
                        [(id<TiWindowProtocol>)theProxy resignFocus];
                    }
                }
                [(TiWindowProxy*)contentViewProxy setIsManaged:YES];
                [(TiWindowProxy*)contentViewProxy open:nil];
                [(TiWindowProxy*) contentViewProxy gainFocus];
                [self updatePopoverNow];
            } else {
                [contentViewProxy windowWillOpen];
                [contentViewProxy reposition];
                [self updatePopoverNow];
                [contentViewProxy windowDidOpen];
            }
        } else {
            DebugLog(@"[WARN] Using the popover without the contentView property set is deprecated.");
            [self windowWillOpen];
            [self reposition];
            [self updatePopoverNow];
            [self windowDidOpen];
        }
	},YES);

}

-(void)updatePopover:(NSNotification *)notification;
{
	//This may be due to a possible race condition of rotating the iPad while another popover is coming up.
	if ((currentlyDisplaying != self)) {
		return;
	}
	[self performSelector:@selector(updatePopoverNow) withObject:nil afterDelay:[[UIApplication sharedApplication] statusBarOrientationAnimationDuration] inModes:[NSArray arrayWithObject:NSRunLoopCommonModes]];
}

-(void)updatePopoverNow
{
    // We're in the middle of playing cleanup while a hide() is happening.
    if (isDismissing) {
        return;
    }
    
	if ((currentlyDisplaying != self)) {
		[currentlyDisplaying hide:nil];
		currentlyDisplaying = self;
	}
	
	
	[self updateContentSize];

	if ([popoverView isUsingBarButtonItem])
	{
		UIBarButtonItem * ourButtonItem = [popoverView barButtonItem];
		@try {
			/*
			 *	Because buttonItems may or many not have a view, there is no way for us
			 *	to know beforehand if the request is an invalid one.
			 */
			[[self popoverController] presentPopoverFromBarButtonItem: ourButtonItem permittedArrowDirections:directions animated:animated];
		}
		@catch (NSException *exception) {
			DebugLog(@"[WARN] Popover requested on view not attached to current window.");
		}
	}
	else
	{
		UIView *view_ = [popoverView view];
#ifdef USE_TI_UITABLEVIEW
        if (view_ == nil && [popoverView isKindOfClass:[TiUITableViewRowProxy class]] && [popoverView viewAttached]) {
            view_ = [[(TiUITableViewRowProxy*)popoverView callbackCell] contentView];
        }
#endif
		if ([view_ window] == nil) {
			// No window, so we can't display the popover...
			DebugLog(@"[WARN] Unable to display popover; view is not attached to the current window");
            return;
		}
		
		CGRect rect;
		if (CGRectIsEmpty(popoverRect))
		{
			rect = [view_ bounds];
		}
		else
		{
			rect = popoverRect;
		}
		
		[[self popoverController] presentPopoverFromRect:rect inView:view_ permittedArrowDirections:directions animated:animated];
	}
}

-(void)hide:(id)args
{
	if (!isShowing) {
		return;
	}
    
	ENSURE_SINGLE_ARG_OR_NIL(args,NSDictionary);
	
	[closingCondition lock];
	isDismissing = YES;
	[closingCondition unlock];
	
	TiThreadPerformOnMainThread(^{
		if (currentlyDisplaying == self) {
			currentlyDisplaying = nil;
		}
		BOOL animated_ = [TiUtils boolValue:@"animated" properties:args def:YES];
		[[self popoverController] dismissPopoverAnimated:animated_];
		
		// Manually calling dismissPopoverAnimated: does not, in fact, call the delegate's
		// popoverControllerDidDismissPopover: callback. See documentation!
		
		// OK, apparently we need the delay so that the animation can finish and the popover vanish before making any
		// dealloc attempts. But mixing poorly-timed hide/show calls can lead to crashes due to this delay, so we
		// have to set a flag to warn show(), and then trigger a condition when the flag is cleared.
		
		[self performSelector:@selector(popoverControllerDidDismissPopover:) withObject:popoverController afterDelay:0.5];		
	},NO);
}

-(void)setPassthroughViews:(id)args
{
    NSMutableArray* views = [NSMutableArray arrayWithCapacity:[args count]];
    for (TiViewProxy* proxy in args) {
        if (![proxy isKindOfClass:[TiViewProxy class]]) {
            [self throwException:[NSString stringWithFormat:@"Passed non-view object %@ as passthrough view",proxy] 
					   subreason:nil
						location:CODELOCATION];
        }
        [views addObject:[proxy view]];
    }
    [[self popoverController] setPassthroughViews:views];
}

#pragma mark Delegate methods
- (void)popoverControllerDidDismissPopover:(UIPopoverController *)thisPopoverController
{
//As of iPhone OS 3.2, calling dismissPopoverAnimated does NOT call didDismissPopover. So we have to do it ourselves.
//HOWEVER, in the event that this IS fixed, we don't want this called one too many times, thus isShowing is to protect
//against that.
	if (!isShowing)
	{
        [closingCondition lock];
        isDismissing = NO;
        [closingCondition signal];
        [closingCondition unlock];
        
		return;
	}
	if (currentlyDisplaying == self) {
		currentlyDisplaying = nil;
	}
    if (contentViewProxy != nil) {
        [contentViewProxy windowWillClose];
    } else {
        [self windowWillClose];
    }
	isShowing = NO;
	[self fireEvent:@"hide" withObject:nil]; //Checking for listeners are done by fireEvent anyways.
	[[NSNotificationCenter defaultCenter] removeObserver:self name:UIApplicationWillChangeStatusBarOrientationNotification object:nil];
    if (contentViewProxy != nil) {
        [contentViewProxy windowDidClose];
        if ([contentViewProxy isKindOfClass:[TiWindowProxy class]]) {
            UIView* topWindowView = [[[TiApp app] controller] topWindowProxyView];
            if ([topWindowView isKindOfClass:[TiUIView class]]) {
                TiViewProxy* theProxy = (TiViewProxy*)[(TiUIView*)topWindowView proxy];
                if ([theProxy conformsToProtocol:@protocol(TiWindowProtocol)]) {
                    [(id<TiWindowProtocol>)theProxy gainFocus];
                }
            }
        }
    } else {
        [self windowDidClose];
    }
	[self forgetSelf];
	RELEASE_TO_NIL(viewController);
	RELEASE_TO_NIL_AUTORELEASE(popoverController);
	RELEASE_TO_NIL(navigationController);
	[self performSelector:@selector(release) withObject:nil afterDelay:0.5];
    [closingCondition lock];
    isDismissing = NO;
    [closingCondition signal];
    [closingCondition unlock];
}

@end

#endif
