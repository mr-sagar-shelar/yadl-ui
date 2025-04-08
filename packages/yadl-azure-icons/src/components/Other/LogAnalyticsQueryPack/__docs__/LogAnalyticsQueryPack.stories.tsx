import type { Meta, StoryObj } from "@storybook/react";
import LogAnalyticsQueryPack from "../LogAnalyticsQueryPack";

const meta: Meta<typeof LogAnalyticsQueryPack> = { title: "Azure/Other/LogAnalyticsQueryPack", component: LogAnalyticsQueryPack };

export default meta;
type Story = StoryObj<typeof LogAnalyticsQueryPack>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
