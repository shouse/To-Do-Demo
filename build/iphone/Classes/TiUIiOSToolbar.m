/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2015 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */
#if defined(USE_TI_UIIOSTOOLBAR) || defined(USE_TI_UITOOLBAR)

#import "TiUIiOSToolbar.h"
#import "TiViewProxy.h"
#import "TiUtils.h"
#import "TiColor.h"
#import "TiToolbarButton.h"
#import "TiToolbar.h"

@implementation TiUIiOSToolbar

-(void)dealloc
{
	[self performSelector:@selector(setItems_:) withObject:nil];
	RELEASE_TO_NIL(toolBar);
	[super dealloc];
}

-(UIToolbar *)toolBar
{
    if (toolBar == nil) {
        toolBar = [[UIToolbar alloc] initWithFrame:[self bounds]];
        [toolBar setAutoresizingMask:UIViewAutoresizingFlexibleWidth|UIViewAutoresizingFlexibleBottomMargin];
        [self addSubview:toolBar];
        if ([TiUtils isIOS7OrGreater]) {
            id extendVal = [[self proxy] valueForUndefinedKey:@"extendBackground"];
            extendsBackground = [TiUtils boolValue:extendVal def:NO];
            if (extendsBackground) {
                [toolBar setDelegate:(id<UIToolbarDelegate>)self];
                [self setClipsToBounds:NO];
                return toolBar;
            }
        }

        [self setClipsToBounds:YES];
    }
    return toolBar;
}

- (NSInteger)positionForBar:(id)bar
{
    if (extendsBackground) {
#if defined(DEBUG) || defined(DEVELOPER)
        TiDimension myTop = ((TiViewProxy*)[self proxy]).layoutProperties->top;
        if (!TiDimensionEqual(myTop, TiDimensionMake(TiDimensionTypeDip, 20))) {
            NSLog(@"extendBackground is true but top is not 20");
        }
#endif
        return UIBarPositionTopAttached;
    }
    return UIBarPositionAny;
}

- (id)accessibilityElement
{
	return [self toolBar];
}

-(void)layoutSubviews
{
	CGRect ourBounds = [self bounds];
	CGFloat height = ourBounds.size.height;	
	if (height != [self verifyHeight:height])
	{
		[(TiViewProxy *)[self proxy] willChangeSize];
		return;
	}


	CGRect toolBounds;
	toolBounds.size = [[self toolBar] sizeThatFits:ourBounds.size];
	toolBounds.origin.x = 0.0;
	toolBounds.origin.y = hideTopBorder?-1.0:0.0;
	[toolBar setFrame:toolBounds];
}


-(void)drawRect:(CGRect)rect
{
	[super drawRect:rect];
	if (!showBottomBorder || [TiUtils isIOS7OrGreater])
	{
		return;
	}

	CGRect toolFrame = [self bounds];

    CGContextRef context = UIGraphicsGetCurrentContext();
    CGContextSetGrayStrokeColor(context, 0.0, 1.0);
	CGContextSetLineWidth(context, 1.0);
	CGContextSetShouldAntialias(context,false);
	CGPoint bottomBorder[2];
	
	CGFloat x = toolFrame.origin.x;
	CGFloat y = toolFrame.origin.y+toolFrame.size.height;
	if ([self respondsToSelector:@selector(contentScaleFactor)] && [self contentScaleFactor] > 1.0)
	{ //Yes, this seems very hackish. Very low priority would be to use something more elegant.
		y -= 0.5;
	}
	bottomBorder[0]=CGPointMake(x,y);
	x += toolFrame.size.width;
	bottomBorder[1]=CGPointMake(x,y);
	CGContextStrokeLineSegments(context,bottomBorder,2);
}


-(void)setItems_:(id)value
{
	ENSURE_TYPE_OR_NIL(value,NSArray);
	if (value!=nil)
	{
		NSMutableArray * result = [NSMutableArray arrayWithCapacity:[value count]];
		Class proxyClass = [TiViewProxy class];
		for (TiViewProxy * thisProxy in value) {
			ENSURE_CLASS(thisProxy,proxyClass);
			if (![thisProxy supportsNavBarPositioning])
			{
				//TODO: This is an exception that should have been raised long ago.
				DebugLog(@"[ERROR] %@ does not support being in a toolbar!",thisProxy);
				//continue;
			}
			if ([thisProxy conformsToProtocol:@protocol(TiToolbarButton)])
			{
				[(id<TiToolbarButton>)thisProxy setToolbar:(id<TiToolbar>)self.proxy];
			}
            [thisProxy windowWillOpen];
			[result addObject:[thisProxy barButtonItem]];
            [thisProxy windowDidOpen];
		}
		[[self toolBar] setItems:result];
	}
	else 
	{
		UIToolbar *toolbar = [self toolBar];
		if (toolbar!=nil)
		{
			for (id thisProxy in [toolbar items])
			{
				if ([thisProxy conformsToProtocol:@protocol(TiToolbarButton)])
				{
					[(id<TiToolbarButton>)thisProxy setToolbar:nil];
				}
			}
		}
		[toolbar setItems:nil];
	}
}

-(void)setBorderTop_:(id)value
{
    if (![TiUtils isIOS7OrGreater]) {
        hideTopBorder = ![TiUtils boolValue:value def:YES];
        [(TiViewProxy *)[self proxy] willChangeSize];
    }
}

-(void)setBorderBottom_:(id)value
{
    if (![TiUtils isIOS7OrGreater]) {
        showBottomBorder = [TiUtils boolValue:value def:NO];
        [(TiViewProxy *)[self proxy] willChangeSize];
    }
}

-(void)setBackgroundImage_:(id)arg
{
    if ([TiUtils isIOS7OrGreater]) {
        UIImage *image = [self loadImage:arg];
        [[self toolBar] setBackgroundImage:image forToolbarPosition:(extendsBackground?UIBarPositionTopAttached:UIBarPositionAny) barMetrics:UIBarMetricsDefault];
        self.backgroundImage = arg;
    } else {
        [super setBackgroundImage_:arg];
    }
}

-(void)setBarColor_:(id)value
{
	TiColor * newBarColor = [TiUtils colorValue:value];
	
	[[self toolBar] setBarStyle:[TiUtils barStyleForColor:newBarColor]];
	[toolBar setTranslucent:[TiUtils barTranslucencyForColor:newBarColor]];
	UIColor* barColor = [TiUtils barColorForColor:newBarColor];

	if ([TiUtils isIOS7OrGreater]) {
		[toolBar performSelector:@selector(setBarTintColor:) withObject:barColor];
	} else {
		[toolBar setTintColor:barColor];
	}
}

-(void)setTintColor_:(id)color
{
    if ([TiUtils isIOS7OrGreater]) {
        TiColor *ticolor = [TiUtils colorValue:color];
        UIColor* theColor = [ticolor _color];
        [[self toolBar] performSelector:@selector(setTintColor:) withObject:theColor];
        [self performSelector:@selector(setTintColor:) withObject:theColor];
    }
}


-(void)setTranslucent_:(id)value
{
	[toolBar setTranslucent:[TiUtils boolValue:value]];
}


-(void)frameSizeChanged:(CGRect)frame bounds:(CGRect)bounds
{
	[super frameSizeChanged:frame bounds:bounds];
	CGFloat height = bounds.size.height;
	
	if (height != [self verifyHeight:height])
	{
		[(TiViewProxy *)[self proxy] willChangeSize];
	}
}


-(CGFloat)verifyHeight:(CGFloat)suggestedHeight
{
	CGFloat result = [[self toolBar] sizeThatFits:CGSizeZero].height;
	if (hideTopBorder)
	{
		result -= 1.0;
	}
	if (showBottomBorder)
	{
		result += 1.0;
	}
	return result;
}

@end

#endif
