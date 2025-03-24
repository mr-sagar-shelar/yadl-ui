import type { Meta, StoryObj } from "@storybook/react";
import SimSpaceWeaver from "../SimSpaceWeaver";

const meta: Meta<typeof SimSpaceWeaver> = { title: "AWS/Compute/SimSpaceWeaver", component: SimSpaceWeaver };

export default meta;
type Story = StoryObj<typeof SimSpaceWeaver>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
