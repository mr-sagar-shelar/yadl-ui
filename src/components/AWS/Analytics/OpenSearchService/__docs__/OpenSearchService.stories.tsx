import type { Meta, StoryObj } from "@storybook/react";
import OpenSearchService from "../OpenSearchService";

const meta: Meta<typeof OpenSearchService> = { title: "AWS/Analytics/OpenSearchService", component: OpenSearchService };

export default meta;
type Story = StoryObj<typeof OpenSearchService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
