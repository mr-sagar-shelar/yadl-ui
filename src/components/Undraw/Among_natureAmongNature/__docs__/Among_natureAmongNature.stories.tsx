import type { Meta, StoryObj } from "@storybook/react";
import Among_natureAmongNature from "../Among_natureAmongNature";

const meta: Meta<typeof Among_natureAmongNature> = { title: "unDraw/Among_natureAmongNature", component: Among_natureAmongNature };

export default meta;
type Story = StoryObj<typeof Among_natureAmongNature>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
