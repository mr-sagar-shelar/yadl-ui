import type { Meta, StoryObj } from "@storybook/react";
import RelaxingAtHome from "../RelaxingAtHome";

const meta: Meta<typeof RelaxingAtHome> = { title: "unDraw/RelaxingAtHome", component: RelaxingAtHome };

export default meta;
type Story = StoryObj<typeof RelaxingAtHome>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
