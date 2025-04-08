import type { Meta, StoryObj } from "@storybook/react";
import Judge_katerina_limpitsouniJudge from "../Judge_katerina_limpitsouniJudge";

const meta: Meta<typeof Judge_katerina_limpitsouniJudge> = { title: "unDraw/Judge_katerina_limpitsouniJudge", component: Judge_katerina_limpitsouniJudge };

export default meta;
type Story = StoryObj<typeof Judge_katerina_limpitsouniJudge>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
