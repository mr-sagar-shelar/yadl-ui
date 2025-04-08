import type { Meta, StoryObj } from "@storybook/react";
import Projections from "../Projections";

const meta: Meta<typeof Projections> = { title: "unDraw/Projections", component: Projections };

export default meta;
type Story = StoryObj<typeof Projections>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
