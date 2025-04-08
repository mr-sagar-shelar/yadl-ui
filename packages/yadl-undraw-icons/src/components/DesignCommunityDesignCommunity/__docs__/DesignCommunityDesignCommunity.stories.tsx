import type { Meta, StoryObj } from "@storybook/react";
import DesignCommunityDesignCommunity from "../DesignCommunityDesignCommunity";

const meta: Meta<typeof DesignCommunityDesignCommunity> = { title: "unDraw/DesignCommunityDesignCommunity", component: DesignCommunityDesignCommunity };

export default meta;
type Story = StoryObj<typeof DesignCommunityDesignCommunity>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
