import type { Meta, StoryObj } from "@storybook/react";
import NakamotoNakamoto from "../NakamotoNakamoto";

const meta: Meta<typeof NakamotoNakamoto> = { title: "unDraw/NakamotoNakamoto", component: NakamotoNakamoto };

export default meta;
type Story = StoryObj<typeof NakamotoNakamoto>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
