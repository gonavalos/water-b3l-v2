declare module "react-simple-maps" {
    import React from "react";

    export interface ComposableMapProps {
        projection?: string;
        projectionConfig?: Record<string, unknown>;
        width?: number;
        height?: number;
        style?: React.CSSProperties;
        viewBox?: string;
        children?: React.ReactNode;
    }
    export const ComposableMap: React.FC<ComposableMapProps>;

    export interface ZoomableGroupProps {
        zoom?: number;
        center?: [number, number];
        disablePanning?: boolean;
        children?: React.ReactNode;
    }
    export const ZoomableGroup: React.FC<ZoomableGroupProps>;

    export interface GeographiesProps {
        geography: string | Record<string, unknown>;
        children: (data: { geographies: Geography[] }) => React.ReactNode;
    }
    export const Geographies: React.FC<GeographiesProps>;

    export interface Geography {
        rsmKey: string;
        id: string;
        properties: Record<string, unknown>;
        type: string;
        geometry: Record<string, unknown>;
    }

    export interface GeographyProps {
        geography: Geography;
        fill?: string;
        stroke?: string;
        strokeWidth?: number;
        style?: {
            default?: React.CSSProperties;
            hover?: React.CSSProperties;
            pressed?: React.CSSProperties;
        };
        onMouseEnter?: (event: React.MouseEvent) => void;
        onMouseLeave?: (event: React.MouseEvent) => void;
        onClick?: (event: React.MouseEvent) => void;
        key?: string;
    }
    export const Geography: React.FC<GeographyProps>;

    export interface MarkerProps {
        coordinates: [number, number];
        children?: React.ReactNode;
        onMouseEnter?: (event: React.MouseEvent) => void;
        onMouseLeave?: (event: React.MouseEvent) => void;
        onClick?: (event: React.MouseEvent) => void;
        key?: string;
    }
    export const Marker: React.FC<MarkerProps>;
}
