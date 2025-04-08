import type { Meta, StoryObj } from "@storybook/react";
import StartledStartled from "../StartledStartled";

const meta: Meta<typeof StartledStartled> = { title: "unDraw/StartledStartled", component: StartledStartled };

export default meta;
type Story = StoryObj<typeof StartledStartled>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
