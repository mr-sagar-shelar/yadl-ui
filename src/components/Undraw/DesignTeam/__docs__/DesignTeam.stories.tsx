import type { Meta, StoryObj } from "@storybook/react";
import DesignTeam from "../DesignTeam";

const meta: Meta<typeof DesignTeam> = { title: "unDraw/DesignTeam", component: DesignTeam };

export default meta;
type Story = StoryObj<typeof DesignTeam>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
