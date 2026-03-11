"use client";

import * as React from "react";
import { cn } from "@tokenization/shared/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
} from "./card";
import { Badge } from "./badge";
import { Button } from "./button";
import { Progress } from "./progress";
import { Avatar, AvatarFallback } from "./avatar";

export interface CampaignCardProps {
  status?: string;
  title?: string;
  country?: string;
  organization?: string;
  description?: string;
  contributorsCount?: number;
  contributorsExtra?: number;
  escrowHref?: string;
  progressLabel?: string;
  progressValue?: number;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

function CampaignCard({
  status = "ACTIVE",
  title = "#101 Micro-Loans 1T",
  country = "COSTA RICA",
  organization = "INTERACTUAR",
  description = "Providing essential capital to local artisans and small-scale farmers in the San Jose region to expand their production capacity and market reach.",
  contributorsCount = 2,
  contributorsExtra = 12,
  escrowHref = "#",
  progressLabel = "LOANS COMPLETED",
  progressValue = 45,
  actionLabel = "Add Loan",
  onAction,
  className,
}: CampaignCardProps) {
  return (
    <Card className={cn("overflow-hidden bg-[#F8F8F8] border-0 shadow-md", className)}>
      <CardHeader className="flex-row flex-wrap items-start justify-between gap-3 pb-2">
        <div className="flex flex-col gap-2 min-w-0">
          <Badge
            variant="secondary"
            className="w-fit rounded-md bg-[#04A777] text-[#FFFFFF] border-0 uppercase text-[10px] font-semibold tracking-wide"
          >
            {status}
          </Badge>
          <CardTitle className="text-lg font-bold tracking-tight text-[#212121] sm:text-xl">
            {title}
          </CardTitle>
        </div>
        <CardAction className="relative row-auto">
          <Button
            size="default"
            className="rounded-md bg-[#FF8C00] text-[#FFFFFF] hover:bg-[#E67E00] font-medium border-0"
            onClick={onAction}
          >
            {actionLabel}
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 pt-0">
        <p className="text-[#828282] text-xs sm:text-sm">
          {country} <span className="text-[#A0A0A0]">|</span> {organization}
        </p>
        <p className="text-[#4F4F4F] text-sm leading-snug line-clamp-2">
          {description}
        </p>
        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex -space-x-2">
              {Array.from({ length: contributorsCount }).map((_, i) => (
                <Avatar key={i} className="size-8 border-2 border-[#F8F8F8]">
                  <AvatarFallback className="text-xs bg-[#E0E0E0] text-[#4F4F4F]">
                    {i + 1}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            {contributorsExtra > 0 && (
              <Badge
                variant="secondary"
                className="rounded-md bg-[#E0E0E0] text-[#FFFFFF] border-0 text-xs font-normal"
              >
                +{contributorsExtra}
              </Badge>
            )}
            <a
              href={escrowHref}
              className="text-[#007BFF] text-sm font-medium inline-flex items-center gap-1 hover:underline hover:text-[#0056b3]"
            >
              See Escrow
              <svg
                className="size-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
          <div className="flex flex-col gap-1.5 min-w-[140px] sm:min-w-[160px]">
            <div className="flex justify-between text-[#4F4F4F] text-xs font-medium">
              <span>{progressLabel}</span>
              <span>{progressValue}%</span>
            </div>
            <Progress
              value={progressValue}
              className="h-2 bg-[#EEEEEE] [&_[data-slot=progress-indicator]]:bg-[#007BFF]"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CampaignCard;
